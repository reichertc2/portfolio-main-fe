import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";
import ProjectBasic from "./ProjectBasic";


interface IFeaturedProjectStandardViewProps {
    projectWorks: IProjectInfo[],
    styling?: IStyles;
}

export const FeaturedProjectStandardView: React.FC<IFeaturedProjectStandardViewProps> = ({ projectWorks, styling }) => {
    return (


        <div className={`hidden sm:block`}>

            {projectWorks.map((project: IProjectInfo) => (
                <ProjectBasic key={"featuredProject"} project={project} />
            ))}
        </div>

    );
}

export default FeaturedProjectStandardView;