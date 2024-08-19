import React from "react";
import { INavigation } from "@/app/_models/navigation";
import { IUserData } from "@/app/_models/user";
import NavBar from "./NavBar";
import { IStyles } from "@/app/_models/styles";

interface IHeaderProps {
  profileMain: IUserData;
  theme: IStyles;
}

export const Header: React.FC<IHeaderProps> = ({ profileMain, theme }) => {
  const navigations: INavigation[] = [
    { label: "About", path: "/AboutMe" },
    { label: "Experience", path: "/Experience" },
    { label: "Projects", path: "/Projects" },
    { label: "Contact", path: "/ContactMe" },
  ];

  return (
    <header className="flex flex-row w-full">
      <NavBar
        themeStyle={theme}
        navigations={navigations}
        logo={profileMain.profile.logo}
        showThemeChange={true}
      />
    </header>
  );
};

export default Header;
