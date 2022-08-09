import Link from "next/link"
import Resume from "./Bio/Resume"

export default function NavBar() {
    return (
        <nav id="leftNavBar">
            <ul>
                <li>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Experience</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
            <Resume />
        </nav>
    )
}