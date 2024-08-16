import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";
import FeaturedProjectMobileView from "./FeaturedProject/FeaturedProjectMobileView";
import FeaturedProjectStandardView from "./FeaturedProject/FeaturedProjectStandardView";


interface IFeaturedProjectProps {
    projectWorks: IProjectInfo[],
    styling?: IStyles;
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({ projectWorks, styling }) => {
    return (
        <ProfileSection
            id={"WorkSection"}
            title={"Featured Project"}
            styling={styling}
        >

            <FeaturedProjectStandardView
                projectWorks={projectWorks}
                styling={styling}
            />
            <FeaturedProjectMobileView
                projectWorks={projectWorks}
                styling={styling}
            />
        </ProfileSection>
    );
}

export default FeaturedProject;