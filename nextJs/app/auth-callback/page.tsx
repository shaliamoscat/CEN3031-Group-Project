'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import {trpc} from '../_trpc/client'
import { Loader2 } from 'lucide-react'
import { TRPCError } from '@trpc/server';

const Page = () => { 
    // page syncs logged in user and checks if they are in the database
    // use router to get access to dashboard
    const router = useRouter()
    const searchParams = useSearchParams()
    // get origin so since origin = dashboard in
    // dashboard file origin var will be set to that
    const origin = searchParams.get('origin')

    // tRPC provides type safety for api calls
    // we will know what type is sent to the front end 
    // without tRPC
    // fetch() operation returns back
    // type any
    // with tRPC
    // fetch() returns type that is the same as
    // what was returned from end point of api

   

    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            // user is there in the db 
            if (success) {
                // send the user whichever page they came from 
                // if they didnt have an origin send them to dashboard
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        },
        // error handling
        onError: (err: { data: { code: string } }) => {
            if (err.data?.code === 'UNAUTHORIZED') {
                router.push('/sign-in')
            }
        },
        retry: true,
        retryDelay: 500,
    
    })
    return (
        // to improve UI show a loading screen at this point
        <div className='w-full mt-22 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <Loader2 className='h-7 w-7 animate-spin text-zinc-800'/>
                <h3 className='font-semibold text-xl'> Account is being setup </h3>
                
            </div>
        </div>
    )
}
export default Page