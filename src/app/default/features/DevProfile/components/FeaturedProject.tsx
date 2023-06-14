import { UnderConstruction } from "@/app/default/common/components/UnderConstruction";
import BasicSectionHeader from "../../../common/components/BasicSectionHeader";
import ProjectBasic from "./FeaturedProject/ProjectBasic";
import { IJobInfo, IProjectInfo } from "@/app/default/models/user";


interface IFeaturedProjectProps {
    projectWorks: IProjectInfo[]
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({ projectWorks }) => {
    return (
        <section id="WorkSection" className={`w-full`}>
            <BasicSectionHeader
                headerTitle={"Featured Project"} />
            <div className={`hidden sm:block`}>

                {projectWorks.map((project: IProjectInfo) => (
                    <ProjectBasic key={"featuredProject"} project={project} />
                ))}
            </div>
            {/* TODO Mobile */}
            <div className={`sm:hidden flex`}>
                <UnderConstruction />
            </div>
        </section>
    );
}

export default FeaturedProject;