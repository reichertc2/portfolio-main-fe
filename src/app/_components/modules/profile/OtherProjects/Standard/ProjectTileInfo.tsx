import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface IProjectTileInfoProps {
  project: IProjectInfo;
  styling?: IStyles;
}

export const ProjectTileInfo: React.FC<IProjectTileInfoProps> = ({
  project,
  styling,
}) => {
  const styles = {
    container: "pb-4 pl-1",
    tileHeader: `pb-0 text-lg dark:text-sky-200 py-1 font-semibold`,
    tileDescription: `px-1 text-xs dark:text-sky-100 py-1 font-semibold`,
    urlContainer: `inline-block px-2 dark:text-sky-200`,
    urlIcon: "text-md",
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.tileHeader}>{project.title}</h3>
      <p className={styles.tileDescription}>{project.description}</p>

      <ul className="">
        {project.urlList.map((url) => (
          <li key={url.name} className={styles.urlContainer}>
            <Link href={url.url}>
              <span>
                <FontAwesomeIcon className={styles.urlIcon} icon={url.icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTileInfo;
