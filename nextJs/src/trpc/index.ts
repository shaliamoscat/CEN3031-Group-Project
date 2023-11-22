import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
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
    // api call  - pass in userid get back all his streaks
    getUserStreak: privateProcedure.query(async ({ ctx }) => {
        const { userId, user } = ctx;
        
        return await db.streak.findMany()
        where: {
                userId
            }
    }),
})

export type AppRouter = typeof appRouter;