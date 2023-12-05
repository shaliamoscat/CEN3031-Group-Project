"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
// syncs user if they are not in the db to the database
// referenced https://youtu.be/ucX2zXAZ1I0 to setup auth callback
const Page = () => {
  const router = useRouter();
  // to get access to origin that we pass as a query param
  // in dashboard page use useRouter
  const parameter = useSearchParams();
  const origin = parameter.get("origin");

  // orgin = dashboard
  // reg nextjs will return api fetch response of type any
  // is not type safe
  // tRPC will ensure typesafety for fetch operations from backend

  trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      // user is in db
      if (success) {
        // send user back to where they came from
        // if there was no origin send them to dashboard
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold text-xl"> Please login / signup </h3>
      </div>
    </div>
  );
};
export default Page;
