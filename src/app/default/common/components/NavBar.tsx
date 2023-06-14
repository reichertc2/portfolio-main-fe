"use client"

import Image from "next/image"
import Link from "next/link"
// import Resume from "../features/Bio/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import { faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { INavigation } from "../../models/navigation"
import { useState } from "react"
import { IStyles } from "../MainClientPage"

interface INavBarProps {
    styles: IStyles;
    navigations: INavigation[];
    logo: any;
    showThemeChange: boolean;
}

export const NavBar: React.FC<INavBarProps> = ({ styles, navigations, logo, showThemeChange }) => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [navMenu, setNavMenu] = useState<boolean>(false)

    const renderThemeChanger = () => {

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button className={`text-sky-200`}
                    onClick={() => setTheme('light')}
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
            )
        } else {
            return (
                <button className={`text-stone-900`}
                    onClick={() => setTheme('dark')}
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            )
        }
    }

    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    }

    return (
        <nav
            id="leftNavBar"
            className={`fixed left-0 top-0 w-full z-10 ease-in duration-300`}
        >
            <div className={`max-w-[1240px] m-auto flex justify-between items-center`}>
                <Image
                    className='flex flex-initial basis-1/8 rounded-full w-20 h-20'
                    src={logo?.image}
                    alt={logo?.alt}
                />

                <ul className={`hidden sm:flex`}>

                    {navigations.map(nav => (
                        <li
                            key={nav.label}
                            className={`px-2 dark:text-sky-200 pt-4`}
                        >
                            <Link href={nav.path}>
                                <span className="hover-underline-animation">{nav.label}</span>
                            </Link>
                        </li>
                    )
                    )
                    }

                    <li className={`px-2 dark:text-stone-900 pt-2`}>
                    </li>
                    {
                        showThemeChange ?
                            <li className={`px-2 dark:text-stone-900 pt-4`}>
                                {renderThemeChanger()}
                            </li>
                            : ""
                    }

                </ul>
                {/* Mobile Button and Menu */}
                <button
                    className={navMenu ? `sm:hidden block dark:text-stone-900 z-10 p-4` : `sm:hidden block dark:text-sky-200 z-10 p-4`}
                    onClick={handleNavMenu}
                >
                    {navMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                <div
                    className={navMenu ? `sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300` : `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300`}
                >

                    <ul className="">

                        {navigations.map(nav => (
                            <li
                                key={nav.label}
                                className={`p-4 text-4xl dark:text-stone-900 hover:text-sky-600`}
                            >
                                <Link href={nav.path}>
                                    <span className="hover-underline-animation">{nav.label}</span>
                                </Link>
                            </li>
                        )
                        )
                        }


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;