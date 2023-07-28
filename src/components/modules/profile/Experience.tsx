import React from "react";
import TabSelector from "./Experience/TabSelector";
import { IJobInfo } from "@/models/user";
import UnderConstruction from "@/components/common/UnderConstruction";
import ProfileSection from "@/components/common/ProfileSection";
import { IStyles } from "@/models/styles";


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

            <div className={`hidden sm:block`}>
                <TabSelector
                    jobExperience={jobExperience}
                />
            </div>
            {/* TODO Mobile */}
            <div className={`sm:hidden flex`}>
                <UnderConstruction />
            </div>

        </ProfileSection>
    )
}

export default Experience;