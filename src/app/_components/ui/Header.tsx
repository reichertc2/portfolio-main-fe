import React from "react";
import { INavigation } from "@/app/_models/navigation";
import { IUserData } from "@/app/_models/user";
import NavBar from "./NavBar";

interface IHeaderProps {
  profileMain: IUserData;
}

export const Header: React.FC<IHeaderProps> = ({ profileMain }) => {
  const navigations: INavigation[] = [
    { label: "About", path: "/AboutMe" },
    { label: "Experience", path: "/Experience" },
    { label: "Projects", path: "/Projects" },
    { label: "Contact", path: "/Contact" },
  ];

  return (
    <header className="flex flex-row w-full">
      <NavBar
        navigations={navigations}
        logo={profileMain.profile.logo}
        showThemeChange={true}
      />
    </header>
  );
};

export default Header;
