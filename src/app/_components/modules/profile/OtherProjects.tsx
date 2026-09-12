import React from "react";
import {IProjectInfo} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import OtherProjectsMobileView from "./OtherProjects/OtherProjectsMobileView";
import OtherProjectsStandardView from "./OtherProjects/OtherProjectsStandardView";

interface IOtherProjectsProps {
    projectWorks: IProjectInfo[];
}

export const OtherProjects: React.FC<IOtherProjectsProps> = ({
                                                                 projectWorks,
                                                             }) => {
    return (
        <ContentContainer id={"WorkSection"} title={"Other Projects"}>
            <OtherProjectsStandardView projectWorks={projectWorks}/>
            {/* TODO Mobile */}
            <OtherProjectsMobileView projectWorks={projectWorks}/>
        </ContentContainer>
    );
};

export default OtherProjects;
