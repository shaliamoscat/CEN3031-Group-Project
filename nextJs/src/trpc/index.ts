import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
import { z } from 'zod';

// declaring api route - main router instance  (appRouter)
// we will add procedures here 
// referred from https://trpc.io/docs/quickstart
export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        // get request to see if user is in db or not
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
    getUserPoints: privateProcedure.query(async ({ ctx }) => {
        const { userId, user } = ctx;
        if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
        return await db.user.findUnique({
            where: {
                id: userId,
            
            }
        })
    }),
    // validate input by using zod - schema validation lib
    populateDb: privateProcedure.input(
        z.object({minutes: z.number() })).mutation(
            async ({ ctx, input }) => {
                const { userId } = ctx;

                // Extract minutes from input
                const { minutes } = input;

                if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });

                 // Fetch the user from the database
                const user = await db.user.findUnique({ where: { id: userId } });

                if (!user) throw new TRPCError({ code: 'NOT_FOUND' });

                // Calculate the new netPoints value
                const netPoints = user.netPoints + (minutes > 149 ? 30 : -30);

                // Update the user's netPoints in the database
                await db.user.update({
                    where: { id: userId },
                    data: { netPoints },
                });

                
                // Create a new entry record in the database
                const newEntry = await db.streak.create({
                    data: {
                        minutes: minutes,
                        // if minutes >= 150 then goal is Reached
                        goalReached: minutes>149,
                    },
                    
                });

            

                // Return the newly created entry
                return newEntry;
            }
    )
})
export type AppRouter = typeof appRouter;
