"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { INavigation } from "@/app/_models/navigation";
import { IStyles } from "@/app/_models/styles";
import NavBarContainer from "./NavBar/NavBarContainer";
import NavBarStandardView from "./NavBar/NavBarStandardView";
import NavBarMobileView from "./NavBar/NavBarMobileView";

interface INavBarProps {
  themeStyle: IStyles;
  navigations: INavigation[];
  logo: any;
  showThemeChange: boolean;
}

export const NavBar: React.FC<INavBarProps> = ({
  themeStyle,
  navigations,
  logo,
  showThemeChange,
}) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const styles = {
    lightText: `text-sky-200`,
    darkText: `text-stone-900`,
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className={styles.lightText} onClick={() => setTheme("light")}>
          <FontAwesomeIcon icon={faSun} />
        </button>
      );
    } else {
      return (
        <button className={styles.darkText} onClick={() => setTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      );
    }
  };

  return (
    <NavBarContainer logo={logo} theme={themeStyle}>
      <NavBarStandardView
        navigations={navigations}
        theme={themeStyle}
        renderThemeChanger={renderThemeChanger}
        showThemeChange={showThemeChange}
      />
      {/* Mobile Button and Menu */}
      <NavBarMobileView navigations={navigations} theme={themeStyle} />
    </NavBarContainer>
  );
};

export default NavBar;
