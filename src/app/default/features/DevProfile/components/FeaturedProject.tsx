import { UnderConstruction } from "@/app/_components/common/UnderConstruction";
import BasicSectionHeader from "../../../../_components/common/BasicSectionHeader";
import ProjectBasic from "./FeaturedProject/ProjectBasic";
import { IProjectInfo } from "@/app/models/user";


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