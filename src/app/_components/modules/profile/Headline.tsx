import React from "react";
import { IProfile } from "@/app/_models/user";
import { INavigation } from "@/app/_models/navigation";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";

interface IHeadlineProps {
  headLine: IProfile;
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine }) => {
  return (
    <>
      <ProfileSection id={"Headline"} >
        <HeadlineStandardView headLine={headLine} />

        {/* Mobile Version */}

        <HeadlineMobileView headLine={headLine}  />
      </ProfileSection>
    </>
  );
};

export default Headline;
