import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IUrl} from "@/app/_models/user";

interface IProjectInfoLinksProps {
    urlList: IUrl[];
}

export const ProjectInfoLinks: React.FC<IProjectInfoLinksProps> = ({
                                                                       urlList,
                                                                   }) => {
    const styles = {
        urlContainer: "text-right py-4 pr-4 text-text dark:text-text-dark",
        url: `inline-block px-2 dark:text-text`,
        urlIcon: "text-2xl text-text dark:text-text-dark",
    };

    return (
        <ul className={styles.urlContainer}>
            {urlList.map((url) => (
                <li key={url.name} className={styles.url}>
                    <Link href={url.url}>
            <span>
              <FontAwesomeIcon className={styles.urlIcon} icon={url.icon}/>
            </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProjectInfoLinks;
