import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import PersonaContainer from "@/app/_components/modules/profile/Headline/Standard/PersonaContainer";
import AvailabilityStatusContainer
    from "@/app/_components/modules/profile/Headline/Standard/AvailabilityStatusContainer";
import FeaturedProjectStandardView from "@/app/_components/modules/profile/FeaturedProject/FeaturedProjectStandardView";
import ButtonGeneric from "@/app/_components/common/buttons/ButtonGeneric";
import ActionButtonContainer from "@/app/_components/modules/profile/Headline/Standard/ActionButtonContainer";

interface IHeadlineStandardViewProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({
                                                                               headLine,
                                                                               featuredProject
                                                                           }) => {

    return (
        <>
            <PersonaContainer persona={headLine}/>
            <AvailabilityStatusContainer availability={headLine.workStatus}/>
            <ActionButtonContainer/>
            <FeaturedProjectStandardView
                projectWorks={featuredProject}
            />
        </>
    );
};

export default HeadlineStandardView;
