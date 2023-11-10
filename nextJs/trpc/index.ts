import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

//test for public procedure
export const appRouter = router({
  // public procedure is api that can be called by auth and 
  // unauth users (anybody basically)
  authCallback: publicProcedure.query(() => {
    // is user there or not in the db?
    const { getUser } = getKindeServerSession()
    const user = getUser()
    if (!user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    
    return { success: true }
    

  }),
  // test: publicProcedure.query(() => {
  //   return 'trpc working'
  // })
})

export type AppRouter = typeof appRouter;