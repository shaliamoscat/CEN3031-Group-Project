import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// referenced from https://youtu.be/ucX2zXAZ1I0?t=690
// reusable component to ensure spacing on left and right is the same across all pages
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
