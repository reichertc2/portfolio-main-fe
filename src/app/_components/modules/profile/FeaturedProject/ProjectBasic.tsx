import { IProjectInfo } from "@/app/_models/user"
import ProjectImage from "./Standard/ProjectImage"
import ProjectInfo from "./Standard/ProjectInfo"

interface IProjectBasicProps {
    project: IProjectInfo
}

export const ProjectBasic: React.FC<IProjectBasicProps> = ({ project }) => {

    const styles = {
        container: "py-8",
    }

    return (
        <div
            key={project["id"]}
            className={styles.container}
        >

            <ProjectImage
                image={project.images[0]}
            />

            <ProjectInfo
                project={project}
            />

        </div>
    )
}


export default ProjectBasic;