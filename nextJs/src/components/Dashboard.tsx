"use client";
import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";
import { CheckCircle, CircleDashedIcon, CircleOff } from "lucide-react";
import { format } from "date-fns"; // for formatting date
import Image from "next/image";

const Dashboard = () => {
  // get streak data of user from trpc backend
  const { data: streaks, isLoading } = trpc.getUserStreak.useQuery();
  // get user points
  const { data: user } = trpc.getUserPoints.useQuery();
  // user points is defined so that sudden large increase or decrease doesn't affect tree as much
  // but continued progress and consistency is rewarded
  let TreeImage = "/tree_0.png";
  if (user?.netPoints && user.netPoints > 10) TreeImage = "/tree_0.png";
  if (user?.netPoints && user.netPoints > 30) TreeImage = "/tree_1.png";
  if (user?.netPoints && user.netPoints > 50) TreeImage = "/tree_2.png";
  if (user?.netPoints && user.netPoints >= 70) TreeImage = "/tree_3.png";
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div
        // to show user his score
        className="text-4xl text-emerald-600 text-center font-bold"
      >
        {" "}
        Score {user?.netPoints}{" "}
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div>
            <Image
              className="mx-auto"
              src={TreeImage}
              width={500}
              height={500}
              quality={100}
              alt="AeroGrow starter plant"
            />
          </div>
        </div>
      </div>
      <div
      // check if streak data exists and is not empty
      >
        {streaks && streaks?.length != 0 ? (
          <div className="mt-16 flex flex-col items-center gap-2 ">
            <table className="table-auto">
              <thead>
                <tr
                // we create a table to display streak info to the user
                >
                  <th
                    // table column titles
                    className="px-4 py-2 text-emerald-700 border-2 border-gray-500"
                  >
                    {" "}
                    Minutes exercised
                  </th>
                  <th className="px-4 py-2 border-2 border-gray-500 text-emerald-700">
                    {" "}
                    Goal Status
                  </th>
                  <th className="px-4 py-2 text-emerald-700 border-2 border-gray-500">
                    {" "}
                    Time{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* date at which user entered the streak is fetched  */}
                {streaks
                  // table is sorted according to the date at which user entered the streak
                  .sort(
                    (a, b) =>
                      new Date(b.updatedAt).getTime() -
                      new Date(a.updatedAt).getTime()
                  )
                  .map((streak, index) => (
                    <tr
                      // map each streak to a row in the table
                      key={index}
                      // alternating row color for table
                      className={index % 2 === 0 ? "bg-gray-200" : ""}
                    >
                      <td className="border-2 border-gray-500 px-4 py-2 ">
                        {streak.minutes}
                      </td>
                      {/* a symbol is displayed depending on whehter goal was reached or not */}
                      <td className="px-4 py-2 border-2 border-gray-500">
                        {streak.goalReached ? <CheckCircle /> : <CircleOff />}
                      </td>
                      <td className="px-4 py-2 border-2 border-gray-500">
                        {/* date is formatted with date-fns library - raw date to dd MM yyyy hh:mm a */}
                        {format(
                          new Date(streak.updatedAt),
                          "dd-MM-yyyy hh:mm a"
                        )}
                      </td>{" "}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : // loading graphics
        isLoading ? (
          <Skeleton height={60} className="my-2" count={20} />
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2 ">
            {/*  if nostreaks show you have not entered anything yet */}
            <h3 className="font-semibold text-xl">
              You have not entered anything yet
            </h3>
            <p> Please enter your exercise minutes </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
