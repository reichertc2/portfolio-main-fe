import Link from "next/link"
import Resume from "./Bio/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"


library.add(faMoon, faSun)

export default function NavBar() {

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button className=""
                    onClick={() => setTheme('light')}
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
            )
        } else {
            return (
                <button className=""
                    onClick={() => setTheme('dark')}
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            )
        }
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
                    <li key={nav.label} className="px-2 dark:text-sky-200 pt-4">
                        <Link href={nav.path}>
                            <a className="hover-underline-animation">{nav.label}</a>
                        </Link>
                    </li>
                )
                )
                }

                <li className="px-2 dark:text-sky-200 pt-2">
                </li>
                <li className="px-2 darK:text-sky-200 pt-4">
                    {renderThemeChanger()}
                </li>
            </ul>

        </nav>
    )
}