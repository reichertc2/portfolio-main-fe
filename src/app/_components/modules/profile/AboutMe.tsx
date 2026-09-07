import React from "react";
import { IAboutMe } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import { IStyles } from "@/app/_models/styles";
import AboutMeStandardView from "./AboutMe/AboutMeStandardView";
import AboutMeMobileView from "./AboutMe/AboutMeMobileView";

interface IAboutMeProps {
  aboutMe: IAboutMe;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ aboutMe}) => {
  return (
    <ProfileSection id={"AboutMeSection"} title={"About Me"} >
      <AboutMeStandardView aboutMe={aboutMe} />

      <AboutMeMobileView aboutMe={aboutMe}  />
    </ProfileSection>
  );
};

export default AboutMe;
