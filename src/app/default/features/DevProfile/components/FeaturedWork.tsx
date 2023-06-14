import { UnderConstruction } from "@/app/default/common/components/UnderConstruction";
import BasicSectionHeader from "../../../common/components/BasicSectionHeader";
import WorkBasic from "./Work/WorkBasic";
import { IJobInfo, IProjectInfo } from "@/app/default/models/user";


interface IFeaturedWorkProps {
    projectWorks: IProjectInfo[]
}

export const FeaturedWork: React.FC<IFeaturedWorkProps> = ({ projectWorks }) => {
    return (
        <section id="WorkSection" className={`w-full`}>
            <BasicSectionHeader
                headerTitle={"Featured Project"} />
            <div className={`hidden sm:block`}>

                {projectWorks.map((project: IProjectInfo) => (
                    <WorkBasic key={"featuredProject"} project={project} />
                ))}
            </div>
            {/* TODO Mobile */}
            <div className={`sm:hidden flex`}>
                <UnderConstruction />
            </div>
        </section>
    );
}

export default FeaturedWork;