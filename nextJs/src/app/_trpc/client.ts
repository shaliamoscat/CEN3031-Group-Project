import { AppRouter } from '@/trpc';
import { createTRPCReact } from '@trpc/react-query';

// pass type of main router as a generic into createTRPCReact
export const trpc = createTRPCReact<AppRouter>({

});