import BasicSectionHeader from "../../../common/components/BasicSectionHeader";
import WorkBasic from "./Work/WorkBasic";
import { genericSectionLayout } from "../../../../styles/styles";
import { IJobInfo, IProjectInfo } from "@/app/default/models/user";


interface IFeaturedWorkProps {
    projectWorks: IProjectInfo[]
}

export const FeaturedWork: React.FC<IFeaturedWorkProps> = ({ projectWorks }) => {
    return (
        <section id="WorkSection" className={`py-24 w-full pl-8`}>
            <BasicSectionHeader
                headerTitle={"Work"} />

            {projectWorks.map((project: IProjectInfo) => (
                <WorkBasic key={"featuredProject"} project={project} />
            ))}
        </section>
    );
}

export default FeaturedWork;