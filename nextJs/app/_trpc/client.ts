import { AppRouter } from "@/trpc";
import { createTRPCReact } from "@trpc/react-query";


export const trpc = createTRPCReact<AppRouter>({})
// we need to pass the type of the main router (the app router type)
// into trpc as a generic 
// into this fucntion 

