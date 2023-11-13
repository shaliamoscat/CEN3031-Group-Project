import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/dist/server";
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from "@/db";

//test for public procedure
export const appRouter = router({
  // public procedure is api that can be called by auth and 
  // unauth users (anybody basically)
  authCallback: publicProcedure.query(async () => {
    // is user there or not in the db?
    const { getUser } = getKindeServerSession()
    const user = getUser()

    // if user doesnot have a id or 
    // does not have an email throw error
    if (!user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    // if user is there return success
    
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id
      }
    })

    if (!dbUser) {
      //create the user in the database
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        }
      })
    }
    // test: publicProcedure.query(() => {
    //   return 'trpc working'
    // })
    return { success: true }

  }),
})

export type AppRouter = typeof appRouter;