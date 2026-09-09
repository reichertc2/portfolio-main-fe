import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import PersonaContainer from "@/app/_components/modules/profile/Headline/Standard/PersonaContainer";
import AvailabilityStatusContainer
    from "@/app/_components/modules/profile/Headline/Standard/AvailabilityStatusContainer";
import ActionButtonContainer from "@/app/_components/modules/profile/Headline/Standard/ActionButtonContainer";
import FeaturedProjectStandardView from "@/app/_components/modules/profile/FeaturedProject/FeaturedProjectStandardView";
import FeaturedProjectMobileView from "@/app/_components/modules/profile/FeaturedProject/FeaturedProjectMobileView";

interface IHeadlineMobileViewProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const HeadlineMobileView: React.FC<IHeadlineMobileViewProps> = ({
                                                                           headLine,
                                                                           featuredProject
                                                                       }) => {
    const styles = {
        container: `sm:hidden flex`,

    };

    return (
        <div className={styles.container}>
            {/*<FeaturedProjectMobileView projectWorks={featuredProject}/>*/}
        </div>
    );
};

export default HeadlineMobileView;
