import AboutMe from "@/app/_components/modules/profile/AboutMe";
import {user} from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import React from "react";

interface IAboutMePageProps {
}

const AboutMePage: React.FC<IAboutMePageProps> = () => {
    return (
        <MainContainer>
            <AboutMe aboutMe={user.aboutMe}/>
        </MainContainer>
    );
};

export default AboutMePage;
