import React from "react";
import {IJobInfo} from "@/app/_models/user";

interface ITabSelectorSummaryProps {
    displayedCompany: IJobInfo;
}

export const TabSelectorBodySummary: React.FC<ITabSelectorSummaryProps> = ({
                                                                               displayedCompany,
                                                                           }) => {
    const styles = {
        container: `mt-4 p-4 text-sm w-full border-t border-secondary`,
        experienceBullets: " ",
        bulletPoint: "relative pl-6 pt-2 before:content-['-'] before:absolute before:left-0 before:text-inherit",
    };

    return (
        <div className={styles.container}>
            <ul className={styles.experienceBullets}>
                {displayedCompany.BulletPoints.map((item, idx) => (
                    <li key={idx} className={styles.bulletPoint}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TabSelectorBodySummary;
