"use client";
// tRPC setup referenced https://youtu.be/ucX2zXAZ1I0
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/app/_trpc/client";
const Providers = ({ children }: PropsWithChildren) => {
  // useState hook is used to create a new instance of the query client
  const [queryClient] = useState(() => new QueryClient());
  // useState hook is used to create a new instance of the trpc client
  // call the trpc Client with a tRPC method
  const [trpcClient] = useState(() =>
    // create tRPC client with link to tRPC backend
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );
  return (
    // trpc.provider allows trpc to be used throughout the app in any component
    // also wrap in query client provider to use react-query
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {" "}
        {children}{" "}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
export default Providers;
