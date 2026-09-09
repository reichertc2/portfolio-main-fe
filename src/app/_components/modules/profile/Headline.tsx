import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import ContentContainer from "@/app/_components/common/ContentContainer";

interface IHeadlineProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const Headline: React.FC<IHeadlineProps> = ({headLine, featuredProject}) => {
    return (
        <>
            <ContentContainer id={"Headline"}>
                <HeadlineStandardView headLine={headLine} featuredProject={featuredProject}/>

                {/* Mobile Version */}

                <HeadlineMobileView headLine={headLine}/>
            </ContentContainer>
        </>
    );
};

export default Headline;
