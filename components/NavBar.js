import Link from "next/link"
import Resume from "./Bio/Resume"

export default function NavBar() {
    return (
        <nav id="leftNavBar" className="inline-block w-4/5">
            <ul className="flex justify-end">
                <li className="px-2 ">
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li className="px-2">
                    <Link href="/">
                        <a>Experience</a>
                    </Link>
                </li>
                <li className="px-2">
                    <Link href="/">
                        <a>Work</a>
                    </Link>
                </li>
                <li className="px-2">
                    <Link href="/">
                        <a>Contact</a>
                    </Link>
                </li>
                <li className="px-2">
                    <Resume />
                </li>
            </ul>

        </nav>
    )
}