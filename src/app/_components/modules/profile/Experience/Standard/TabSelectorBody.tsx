import React from "react";
import {IJobInfo} from "@/app/_models/user";
import TabSelectorBodyHeader from "@/app/_components/modules/profile/Experience/Standard/TabSelectorBodyHeader";
import TabSelectorBodySummary from "@/app/_components/modules/profile/Experience/Standard/TabSelectorBodySummary";

interface ITabSelectorBodyProps {
    displayedCompany: IJobInfo;
}

export const TabSelectorBody: React.FC<ITabSelectorBodyProps> = ({
                                                                     displayedCompany,
                                                                 }) => {
    const styles = {
        container: `px-4 text-text dark:text-text-dark inline-block w-3/5 align-top border-l-2 border-secondary rounded-r-md mt-1 h-80`,
        experienceBullets: "mt-4 p-4 text-sm w-full border-t border-secondary",
        bulletPoint: "pl-6 pt-2",
    };

    return (
        <div className={styles.container}>
            <TabSelectorBodyHeader displayedCompany={displayedCompany}/>
            <TabSelectorBodySummary displayedCompany={displayedCompany}/>
        </div>
    );
};

export default TabSelectorBody;
