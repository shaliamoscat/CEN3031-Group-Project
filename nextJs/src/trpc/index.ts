import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
 
export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession();
        const user = getUser();

        if (!user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' });
        // test: publicProcedure.query(() => {
        //     return "hello";
        // })


        // is user in the db?
        const userInDb = await db.user.findFirst({
            where: {
                id: user.id
            }
        });
        if (!userInDb) {
            // user not synced
            // create user
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                    joinedOn: new Date(),
                }
            })
        }
        
        return { success: true }
    }),
})
 

export type AppRouter = typeof appRouter;