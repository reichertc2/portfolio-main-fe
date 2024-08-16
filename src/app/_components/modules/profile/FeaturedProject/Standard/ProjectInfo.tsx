import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IProjectInfo } from "@/app/_models/user"

interface IProjectInfoProps {
    project: IProjectInfo
}

export const ProjectInfo: React.FC<IProjectInfoProps> = ({ project }) => {

    const styles = {
        container: "inline-block w-3/5 align-top",
        projectHeader: `text-xl dark:text-sky-200 py-1 font-semibold text-right`,
        projectDescription: `dark:text-sky-200 dark:border-sky-200 p-1 rounded-md m-3 text-right`,
        toolListContainer: "text-right p-3",
        tool: `inline-block px-2 dark:text-sky-200`,
        urlContainer: "pl-64",
        url: `inline-block px-2 dark:text-sky-200`,
        urlIcon: "text-2xl"
    }

    return (


        <div className={styles.container}>
            <h3 className={styles.projectHeader}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.toolListContainer}>

                {
                    project.toolList.map(tool =>
                        <li key={tool}
                            className={styles.tool}
                        >
                            {tool}
                        </li>

                    )
                }

            </ul>
            <ul className={styles.urlContainer}>

                {
                    project.urlList.map(url =>
                        <li
                            key={url.name}
                            className={styles.url}
                        >
                            <Link href={url.url}>
                                <span>
                                    <FontAwesomeIcon
                                        className={styles.urlIcon}
                                        icon={url.icon} />
                                </span>

                            </Link>

                        </li>
                    )
                }

            </ul>
        </div>
    )
}


export default ProjectInfo;