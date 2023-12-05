import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

// tailwind classnames referenced from https://youtu.be/ucX2zXAZ1I0
const Navbar = () => {
  return (
    // sticky ensures navbar is always on top of the page
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span> AeroGrow </span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                {" "}
                Streaks{" "}
              </Link>
              {/* login and register links come from Kinde Auth pckg */}
              <LoginLink
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                {" "}
                Sign in{" "}
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                {" "}
                Get Started{" "}
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
