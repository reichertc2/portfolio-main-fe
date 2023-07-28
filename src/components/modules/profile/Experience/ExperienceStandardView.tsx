import React from "react";
import { IJobInfo } from "@/models/user";
import { IStyles } from "@/models/styles";
import TabSelector from "./TabSelector";


interface IExperienceStandardViewProps {
    jobExperience: IJobInfo[];
    styling?: IStyles;
}

export const ExperienceStandardView: React.FC<IExperienceStandardViewProps> = ({ jobExperience, styling }) => {

    return (
        <div className={`hidden sm:block`}>
            <TabSelector
                jobExperience={jobExperience}
            />
        </div>
    )
}

export default ExperienceStandardView;