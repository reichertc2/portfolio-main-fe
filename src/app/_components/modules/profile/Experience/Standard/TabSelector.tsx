"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import TabSelectorButtons from "./TabSelectorButtons";
import TabSelectorBody from "./TabSelectorBody";

interface ITabSelectorProps {
    jobExperience: IJobInfo[];
    styling?: IStyles;
}

export const TabSelector: React.FC<ITabSelectorProps> = ({ jobExperience, styling }) => {

    const [displayedCompany, setDisplayedCompany] = useState<IJobInfo>(jobExperience[0])

    const styles = {
        container: "inline-block w-full p-1",
    }

    const openExperience = (id = "exp-1") => {
        let company = jobExperience.filter(comp => comp["id"] === id)
        setDisplayedCompany(company[0])
    }

    return (
        <div id="ExperienceTabs" className={styles.container}>

            <TabSelectorButtons
                jobExperience={jobExperience}
                openExperience={openExperience}

            />

            <TabSelectorBody
                displayedCompany={displayedCompany}
            />

        </div>
    )
}

export default TabSelector;