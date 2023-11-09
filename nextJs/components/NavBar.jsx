import Link from "next/link";
export default function NavBar() {
    return (
         <nav>
             <ul className="flex gap-2">
                <li className="px-6 font-roboto">
                    <Link href="/"
                        className="text-emerald-600 hover:underline">
                        AEROGROW
                    </Link>
                </li>
                <li className="ml-auto px-3 font-roboto">
                    <Link href="/AboutPage"
                        className="text-emerald-600 hover:underline">
                        ABOUT</Link>
                </li>
                <li className="px-3 font-roboto">
                    <Link href="/LoginPage"
                        className="text-emerald-600 hover:underline">
                        LOGIN</Link> 
                </li>
                <li className=" px-4 font-roboto">
                    <Link href="/StreakDataPage"
                         className="text-emerald-600 hover:underline">
                        STREAKS
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
