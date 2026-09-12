import React from "react";
import {IJobInfo} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import ExperienceMobileView from "./Experience/ExperienceMobileView";
import ExperienceStandardView from "./Experience/ExperienceStandardView";

interface IExperienceProps {
    jobExperience: IJobInfo[];
}

export const Experience: React.FC<IExperienceProps> = ({
                                                           jobExperience,
                                                       }) => {
    return (
        <ContentContainer id={"ExperienceSection"}>
            <ExperienceStandardView jobExperience={jobExperience}/>
            <ExperienceMobileView jobExperience={jobExperience}/>
        </ContentContainer>
    );
};

export default Experience;
