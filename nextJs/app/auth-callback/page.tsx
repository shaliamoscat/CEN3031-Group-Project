
import { useRouter, useSearchParams } from 'next/navigation'
import {trpc} from '../_trpc/client'
const Page = async () => { 
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

   

    const {data, isLoading} = trpc.test.useQuery()
}
export default Page