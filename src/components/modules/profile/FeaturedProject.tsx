import BasicSectionHeader from "@/components/common/BasicSectionHeader";
import UnderConstruction from "@/components/common/UnderConstruction";
import ProjectBasic from "./FeaturedProject/ProjectBasic";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";
import ProfileSection from "@/components/common/ProfileSection";


interface IFeaturedProjectProps {
    projectWorks: IProjectInfo[],
    styling: IStyles;
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({ projectWorks, styling }) => {
    return (
        <ProfileSection
            id={"WorkSection"}
            title={"Featured Project"}
            styling={styling}
        >

            <div className={`hidden sm:block`}>

                {projectWorks.map((project: IProjectInfo) => (
                    <ProjectBasic key={"featuredProject"} project={project} />
                ))}
            </div>
            {/* TODO Mobile */}
            <div className={`sm:hidden flex`}>
                <UnderConstruction />
            </div>
        </ProfileSection>
    );
}

export default FeaturedProject;