import React from "react";
import {IUserData} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import FeaturedProjectMobileView from "./FeaturedProject/FeaturedProjectMobileView";
import FeaturedProjectStandardView from "./FeaturedProject/FeaturedProjectStandardView";
import OtherProjectsStandardView from "@/app/_features/profile/OtherProjects/OtherProjectsStandardView";
import OtherProjectsMobileView from "@/app/_features/profile/OtherProjects/OtherProjectsMobileView";

interface IFeaturedProjectProps {
    userData: IUserData;
}

export const ProjectWorks: React.FC<IFeaturedProjectProps> = ({
                                                                  userData,
                                                              }) => {
    return (
        <ContentContainer id={"WorkSection"} title={"Projects"} subTitle={"Finished and Pipeline projects"}>
            <FeaturedProjectStandardView
                projectWorks={userData.projects}
            />
            <FeaturedProjectMobileView projectWorks={userData.projects}/>

            <OtherProjectsStandardView projectWorks={userData.subprojects}/>
            {/* TODO Mobile */}
            <OtherProjectsMobileView projectWorks={userData.subprojects}/>
        </ContentContainer>
    );
};

export default ProjectWorks;
