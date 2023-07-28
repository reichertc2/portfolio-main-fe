import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";

interface IProjectTileInfoProps {
  project: IProjectInfo;
  styling?: IStyles;
}

export const ProjectTileInfo: React.FC<IProjectTileInfoProps> = ({ project, styling }) => {

  const styles = {
    container: "absolute -left-0 -bottom-0 opacity-0 hover:opacity-90 pb-4 pl-1",
    tileHeader: `text-xl dark:text-stone-900 py-1 font-semibold`,
    tileDescription: `text-md dark:text-stone-900 py-1 font-semibold`,
    urlContainer: `inline-block px-2 dark:text-stone-900`,
    urlIcon: "text-2xl"
  }
  return (

    <div className={styles.container}>
      <h3
        className={styles.tileHeader}
      >
        {project.title}
      </h3>
      <p
        className={styles.tileDescription}
      >
        {project.description}
      </p>

      <ul className="">
        {project.urlList.map((url) => (
          <li
            key={url.name}
            className={styles.urlContainer}
          >
            <Link href={url.url}>
              <span>
                <FontAwesomeIcon
                  className={styles.urlIcon}
                  icon={url.icon}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>



  );
}

export default ProjectTileInfo;