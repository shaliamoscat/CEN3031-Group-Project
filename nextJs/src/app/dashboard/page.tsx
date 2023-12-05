import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  // get current login session
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  // checks if user exists in the database
  const userDb = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });
  // if user logs in for the first time and is not in database
  // they will be redirected to the auth-callback page where
  // the user will be synced to the db
  if (!userDb) redirect("/auth-callback?origin=dashboard");
  return <Dashboard />;
};
export default Page;
