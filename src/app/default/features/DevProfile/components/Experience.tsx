import BasicSectionHeader from "../../../common/components/BasicSectionHeader";
import React from "react";
import TabSelector from "./Experience/TabSelector";
import { IJobInfo } from "@/app/default/models/user";
import { IStyles } from "@/app/default/common/MainClientPage";
import UnderConstruction from "@/app/default/common/components/UnderConstruction";

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