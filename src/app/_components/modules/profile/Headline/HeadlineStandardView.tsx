import React from "react";
import {IProfile} from "@/app/_models/user";
import PersonaContainer from "@/app/_components/modules/profile/Headline/Standard/PersonaContainer";
import AvailabilityStatusContainer
    from "@/app/_components/modules/profile/Headline/Standard/AvailabilityStatusContainer";

interface IHeadlineStandardViewProps {
    headLine: IProfile;
}

export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({
                                                                               headLine,
                                                                           }) => {
    const styles = {
        container: `hidden md:block`,

    };

    return (
        <>
            <PersonaContainer persona={headLine}/>
            <AvailabilityStatusContainer availability={headLine.workStatus}/>
        </>
    );
};

export default HeadlineStandardView;
