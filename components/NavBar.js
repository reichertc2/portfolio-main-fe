import Link from "next/link"
import Resume from "./Bio/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from "@fortawesome/free-solid-svg-icons"

library.add(faMoon)

export default function NavBar() {
    const renderThemeChanger = () => {
        return (
            <button className="">
                <FontAwesomeIcon icon={faMoon} />
            </button>
        )
    }

    const navigations = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },

    ]

    return (
        <nav id="leftNavBar" className="inline-block w-11/12 align-top">
            <ul className="flex justify-end">

                {navigations.map(nav => (
                    <li key={nav.label} className="px-2 text-sky-200 pt-4">
                        <Link href={nav.path}>
                            <a className="hover-underline-animation">{nav.label}</a>
                        </Link>
                    </li>
                )
                )
                }

                <li className="px-2 text-sky-200 pt-2">
                    <Resume />
                </li>
                <li className="px-2 text-sky-200 pt-4">
                    {renderThemeChanger()}
                </li>
            </ul>

        </nav>
    )
}