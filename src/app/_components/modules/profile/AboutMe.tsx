import React from "react";
import { IAboutMe } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import { IStyles } from "@/app/_models/styles";
import AboutMeStandardView from "./AboutMe/AboutMeStandardView";
import AboutMeMobileView from "./AboutMe/AboutMeMobileView";

interface IAboutMeProps {
  aboutMe: IAboutMe;
  theme: IStyles;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ aboutMe, theme }) => {
  return (
    <ProfileSection id={"AboutMeSection"} title={"About Me"} theme={theme}>
      <AboutMeStandardView aboutMe={aboutMe} theme={theme} />

      <AboutMeMobileView aboutMe={aboutMe} theme={theme} />
    </ProfileSection>
  );
};

export default AboutMe;
