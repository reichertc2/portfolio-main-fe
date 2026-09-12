import React from "react";
import {IProjectInfo} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import FeaturedProjectMobileView from "./FeaturedProject/FeaturedProjectMobileView";
import FeaturedProjectStandardView from "./FeaturedProject/FeaturedProjectStandardView";

interface IFeaturedProjectProps {
    projectWorks: IProjectInfo[];
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({
                                                                     projectWorks,
                                                                 }) => {
    return (
        <ContentContainer id={"WorkSection"} title={"Featured Project"}>
            <FeaturedProjectStandardView
                projectWorks={projectWorks}
            />
            <FeaturedProjectMobileView projectWorks={projectWorks}/>
        </ContentContainer>
    );
};

export default FeaturedProject;
