import React from "react";
import {IAboutMe} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import AboutMeStandardView from "./AboutMe/AboutMeStandardView";
import AboutMeMobileView from "./AboutMe/AboutMeMobileView";

interface IAboutMeProps {
    aboutMe: IAboutMe;
}

export const AboutMe: React.FC<IAboutMeProps> = ({aboutMe}) => {
    return (
        <ContentContainer id={"AboutMeSection"} title={"About Me"}>
            <AboutMeStandardView aboutMe={aboutMe}/>

            <AboutMeMobileView aboutMe={aboutMe}/>
        </ContentContainer>
    );
};

export default AboutMe;
