import { AppRouter } from '@/trpc';
import { createTRPCReact } from '@trpc/react-query';

// pass type of main router as a generic into createTRPCReact
// tRPC expects type to be passed in as this is how it ensures 
// typesafety between client and server
export const trpc = createTRPCReact<AppRouter>({

});