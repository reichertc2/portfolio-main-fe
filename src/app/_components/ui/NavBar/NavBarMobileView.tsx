"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { INavigation } from "@/app/_models/navigation";
import { IStyles } from "@/app/_models/styles";

interface INavBarMobileViewProps {
  theme: IStyles;
  navigations: INavigation[];
}

export const NavBarMobileView: React.FC<INavBarMobileViewProps> = ({
  theme,
  navigations,
}) => {
  const [navMenu, setNavMenu] = useState<boolean>(false);

  const styles = {
    menuButtonOpen: `sm:hidden block dark:${theme.texts.dark} z-10 p-4`,
    menuButtonClosed: `sm:hidden block dark:${theme.texts.dark} z-10 p-4`,
    menuContainerOpen: `sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300`,
    menuContainerClosed: `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300`,
    navLi: `p-4 text-4xl dark:text-stone-900 hover:text-sky-600`,
    hoverAnimation: `hover-underline-animation`,
  };

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      {/* Mobile Button and Menu */}
      <button
        className={navMenu ? styles.menuButtonOpen : styles.menuButtonClosed}
        onClick={handleNavMenu}
      >
        {navMenu ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <div
        className={
          navMenu ? styles.menuContainerOpen : styles.menuContainerClosed
        }
      >
        <ul className="">
          {navigations.map((nav) => (
            <li key={nav.label} className={styles.navLi}>
              <button onClick={handleNavMenu}>
              <Link href={nav.path}>
                <span className={styles.hoverAnimation}>{nav.label}</span>
              </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBarMobileView;
