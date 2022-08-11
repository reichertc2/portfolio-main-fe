import Link from "next/link"
import Resume from "./Bio/Resume"

export default function NavBar() {
    return (
        <nav id="leftNavBar" className="inline-block w-11/12 align-top">
            <ul className="flex justify-end">
                <li className="px-2 text-sky-200 pt-4">
                    <Link href="#AboutMeSection">
                        <a className="hover-underline-animation">About</a>
                    </Link>
                </li>
                <li className="px-2  text-sky-200 pt-4">
                    <Link href="#ExperienceSection">
                        <a className="hover-underline-animation">Experience</a>
                    </Link>
                </li>
                <li className="px-2  text-sky-200 pt-4">
                    <Link href="#WorkSection">
                        <a className="hover-underline-animation">Work</a>
                    </Link>
                </li>
                <li className="px-2  text-sky-200 pt-4">
                    <Link href="#ContactSection" >
                        <a className="hover-underline-animation">Contact</a>
                    </Link>
                </li>
                <li className="px-2 text-sky-200 pt-2">
                    <Resume />
                </li>
            </ul>

        </nav>
    )
}