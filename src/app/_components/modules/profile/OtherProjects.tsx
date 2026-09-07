import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";
import OtherProjectsMobileView from "./OtherProjects/OtherProjectsMobileView";
import OtherProjectsStandardView from "./OtherProjects/OtherProjectsStandardView";

interface IOtherProjectsProps {
  projectWorks: IProjectInfo[];
}

export const OtherProjects: React.FC<IOtherProjectsProps> = ({
  projectWorks,
  }) => {
  return (
    <ProfileSection id={"WorkSection"} title={"Other Projects"} >
      <OtherProjectsStandardView projectWorks={projectWorks} />
      {/* TODO Mobile */}
      <OtherProjectsMobileView projectWorks={projectWorks}  />
    </ProfileSection>
  );
};

export default OtherProjects;
