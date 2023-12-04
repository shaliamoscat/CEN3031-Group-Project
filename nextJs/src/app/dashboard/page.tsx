import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  // get current login session
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  const userDb = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });
  // if not in database
  if (!userDb) redirect("/auth-callback?origin=dashboard");
  return <Dashboard />;
  // return <div>{user.email}</div>
};
export default Page;
