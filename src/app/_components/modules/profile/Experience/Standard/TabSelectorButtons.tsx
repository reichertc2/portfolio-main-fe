import React from "react";
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface ITabSelectorButtonsProps {
    jobExperience: IJobInfo[];
    styling?: IStyles;
    openExperience: (item: string) => void
}

export const TabSelectorButtons: React.FC<ITabSelectorButtonsProps> = ({ jobExperience, styling, openExperience }) => {

    const styles = {
        tabContainer: "w-1/5 inline-block",
    }

    return (
        <div id="tab" className={styles.tabContainer}>

            {
                jobExperience.map(comp =>

                    <button
                        key={comp["id"]}
                        onClick={() => openExperience(comp.id)}
                        className={`my-1 block pl-4 py-3 border border-sky-600 rounded-md dark:text-stone-100 text-xs text-left w-full `}
                    >
                        {comp["CompanyName"]}
                    </button>
                )
            }

        </div>

    )
}

export default TabSelectorButtons;