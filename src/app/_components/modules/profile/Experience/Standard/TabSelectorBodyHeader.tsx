import Link from "next/link";
import React from "react";
import {IJobInfo} from "@/app/_models/user";

interface ITabSelectorBodyHeaderProps {
    displayedCompany: IJobInfo;
}

export const TabSelectorBodyHeader: React.FC<ITabSelectorBodyHeaderProps> = ({
                                                                                 displayedCompany,
                                                                             }) => {
    const styles = {
        container: `px-4 text-text dark:text-text-dark inline-block w-3/5 align-top border-l-2 border-secondary rounded-r-md mt-1 h-80`,
        bodyHeader: "text-lg inline-block",
        link: "inline-block",
        hoverAnimation: "hover-underline-animation",
        tenureText: `text-xs text-text dark:text-text-dark font-semibold`,
    };

    return (
        <>
            <h3 className={styles.bodyHeader}>{displayedCompany?.Position} </h3>
            <Link className={styles.link} href={displayedCompany?.CompanyURL}>
        <span>{" "}--&gt;{" "}
            <span className={styles.hoverAnimation}>
            {displayedCompany?.CompanyName}
          </span>
        </span>
            </Link>
            <p className={styles.tenureText}>{displayedCompany?.Tenure}</p>
        </>

    );
};

export default TabSelectorBodyHeader;
