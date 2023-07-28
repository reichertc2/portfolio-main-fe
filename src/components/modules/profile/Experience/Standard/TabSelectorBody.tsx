import Link from "next/link";
import React from "react";
import { IJobInfo } from "@/models/user";
import { IStyles } from "@/models/styles";

interface ITabSelectorBodyProps {
    displayedCompany: IJobInfo;
    styling?: IStyles;
}

export const TabSelectorBody: React.FC<ITabSelectorBodyProps> = ({ displayedCompany, styling }) => {

    const styles = {
        container: `px-4 dark:text-stone-100 inline-block w-4/5 align-top`,
        bodyHeader: "text-lg inline-block",
        link: "inline-block",
        hoverAnimation: "hover-underline-animation",
        tenureText: `text-xs dark:text-stone-100 font-semibold`,
        experienceBullets: "p-4 text-sm w-full",
        bulletPoint: "img-li pl-6 pt-2"
    }

    return (

        <div className={styles.container} >
            <h3 className={styles.bodyHeader}>{displayedCompany.Position} </h3>
            <Link className={styles.link} href={displayedCompany.CompanyURL}>
                <span> --&gt; <span className={styles.hoverAnimation}>{displayedCompany.CompanyName}</span></span>
            </Link>
            <p className={styles.tenureText}>{displayedCompany.Tenure}</p>
            <ul className={styles.experienceBullets}>

                {
                    displayedCompany.BulletPoints.map((item, idx) =>
                        <li key={idx}
                            className={styles.bulletPoint}
                        >
                            {item}
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default TabSelectorBody;