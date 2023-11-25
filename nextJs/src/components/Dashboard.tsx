"use client";
import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";
import { CheckCircle, CircleDashedIcon, CircleOff } from "lucide-react";
import { format } from "date-fns"; // date formatting

const Dashboard = () => {
  const { data: streaks, isLoading } = trpc.getUserStreak.useQuery();
  // return (<div> Hello world </div>)
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div>
        {streaks && streaks?.length != 0 ? (
          <div className="mt-16 flex flex-col items-center gap-2 ">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-emerald-700 border-2 border-gray-500">
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
                {streaks.map((streak, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-200" : ""}
                  >
                    <td className="border-2 border-gray-500 px-4 py-2 ">
                      {streak.minutes}
                    </td>
                    <td className="px-4 py-2 border-2 border-gray-500">
                      {streak.goalReached ? <CheckCircle /> : <CircleOff />}
                    </td>
                    <td className="px-4 py-2 border-2 border-gray-500">
                      {format(new Date(streak.updatedAt), "dd-MM-yyyy hh:mm a")}
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : isLoading ? (
          <Skeleton height={60} className="my-2" count={20} />
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2 ">
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
