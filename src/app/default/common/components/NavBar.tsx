import Link from "next/link"
// import Resume from "../features/Bio/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { baseDarkText, baseText, lightText } from "@/app/styles/colors"


library.add(faMoon, faSun)

interface INavBarProps {

}

export const NavBar: React.FC<INavBarProps> = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button className={lightText}
                    onClick={() => setTheme('light')}
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
            )
        } else {
            return (
                <button className={baseText}
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
        <nav
            id="leftNavBar"
            className="inline-block w-11/12 align-top"
        >
            <ul className="flex justify-end">

                {navigations.map(nav => (
                    <li
                        key={nav.label}
                        className={`px-2 dark:${baseDarkText} pt-4`}
                    >
                        <Link href={nav.path}>
                            <span className="hover-underline-animation">{nav.label}</span>
                        </Link>
                    </li>
                )
                )
                }

                <li className={`px-2 dark:${baseDarkText} pt-2`}>
                </li>
                <li className={`px-2 dark:${baseDarkText} pt-4`}>
                    {renderThemeChanger()}
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;