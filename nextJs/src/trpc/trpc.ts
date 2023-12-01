import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError, initTRPC } from '@trpc/server';
// from https://trpc.io/docs/quick-start
// file contains api logic
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 const middleware = t.middleware
const AuthCheck = middleware(async (opts) => {
    const { getUser } = getKindeServerSession()
    const user = getUser()
    //user might be a value or undefined

    if (!user || !user.id) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return opts.next({
        ctx: {
            // pass values from middleware to api route
            userId: user.id,
            user,
        },
    })
    }
)
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
// public Procedure helps create an api everyone (auth/not) 
// can call => its a public api 
export const privateProcedure = t.procedure.use(AuthCheck);