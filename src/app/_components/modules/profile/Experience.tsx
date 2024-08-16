import React from "react";
import { IJobInfo } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import { IStyles } from "@/app/_models/styles";
import ExperienceMobileView from "./Experience/ExperienceMobileView";
import ExperienceStandardView from "./Experience/ExperienceStandardView";


interface IExperienceProps {
    jobExperience: IJobInfo[];
    styling?: IStyles;
}

export const Experience: React.FC<IExperienceProps> = ({ jobExperience, styling }) => {

    return (
        <ProfileSection
            id={"ExperienceSection"}
            title={"Experience"}
            styling={styling}
        >

            <ExperienceStandardView
                jobExperience={jobExperience}
                styling={styling}
            />
            <ExperienceMobileView
                jobExperience={jobExperience}
                styling={styling}
            />

        </ProfileSection>
    )
}

export default Experience;