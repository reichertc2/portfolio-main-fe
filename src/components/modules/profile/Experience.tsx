import React from "react";
import TabSelector from "./Experience/TabSelector";
import { IJobInfo } from "@/models/user";
import BasicSectionHeader from "@/components/common/BasicSectionHeader";
import UnderConstruction from "@/components/common/UnderConstruction";
import { IStyles } from "@/components/ui/MainClientPage";


interface IExperienceProps {
    jobExperience: IJobInfo[];
    styles?: IStyles;
}

export const Experience: React.FC<IExperienceProps> = ({ jobExperience, styles }) => {

    return (
        <section id="ExperienceSection" className={`w-full`}>
            <BasicSectionHeader
                headerTitle={"Experience"}
                styles={styles}
            />
            <div className={`hidden sm:block`}>
                <TabSelector
                    jobExperience={jobExperience}
                />
            </div>
            {/* TODO Mobile */}
            <div className={`sm:hidden flex`}>
                <UnderConstruction />
            </div>

        </section>
    )
}

export default Experience;