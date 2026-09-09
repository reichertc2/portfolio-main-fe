import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import PersonaContainer from "@/app/_components/modules/profile/Headline/Standard/PersonaContainer";
import AvailabilityStatusContainer
    from "@/app/_components/modules/profile/Headline/Standard/AvailabilityStatusContainer";
import FeaturedProject from "@/app/_components/modules/profile/FeaturedProject";
import FeaturedProjectStandardView from "@/app/_components/modules/profile/FeaturedProject/FeaturedProjectStandardView";

interface IHeadlineStandardViewProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({
                                                                               headLine,
                                                                               featuredProject
                                                                           }) => {
    const styles = {
        container: `hidden md:block`,

    };

    return (
        <>
            <PersonaContainer persona={headLine}/>
            <AvailabilityStatusContainer availability={headLine.workStatus}/>
            <FeaturedProjectStandardView
                projectWorks={featuredProject}
            />
        </>
    );
};

export default HeadlineStandardView;
