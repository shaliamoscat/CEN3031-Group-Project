"use client";
import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";
import { CheckCircle, CircleDashedIcon, CircleOff } from "lucide-react";

// date formatting
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
  const year = date.getFullYear();

  // Get hours and minutes
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Convert 24-hour time to 12-hour time
  const twelveHourHours = hours % 12 || 12;
  const amPm = hours < 12 ? "am" : "pm";

  return `${day}-${month}-${year} ${twelveHourHours}:${minutes} ${amPm}`;
}

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
                      {formatDate(streak.updatedAt)}
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
