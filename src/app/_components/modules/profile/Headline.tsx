import React from "react";
import {IProfile} from "@/app/_models/user";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import ContentContainer from "@/app/_components/common/ContentContainer";

interface IHeadlineProps {
    headLine: IProfile;
}

export const Headline: React.FC<IHeadlineProps> = ({headLine}) => {
    return (
        <>
            <ContentContainer id={"Headline"}>
                <HeadlineStandardView headLine={headLine}/>

                {/* Mobile Version */}

                <HeadlineMobileView headLine={headLine}/>
            </ContentContainer>
        </>
    );
};

export default Headline;
