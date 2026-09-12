import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import PersonaContainer from "@/app/_features/profile/Headline/Standard/PersonaContainer";
import AvailabilityStatusContainer
    from "@/app/_features/profile/Headline/Standard/AvailabilityStatusContainer";
import FeaturedProjectStandardView from "@/app/_features/profile/FeaturedProject/FeaturedProjectStandardView";
import ActionButtonContainer from "@/app/_features/profile/Headline/Standard/ActionButtonContainer";

interface IHeadlineStandardViewProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({
                                                                               headLine,
                                                                               featuredProject
                                                                           }) => {
    const styles = {
        container: ``,
    }

    return (
        <div className={styles.container}>
            <PersonaContainer persona={headLine}/>
            <AvailabilityStatusContainer availability={headLine.workStatus}/>
            <ActionButtonContainer/>
            <FeaturedProjectStandardView
                projectWorks={featuredProject}
            />
        </div>
    );
};

export default HeadlineStandardView;
