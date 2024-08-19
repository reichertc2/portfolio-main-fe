import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";
import OtherProjectsMobileView from "./OtherProjects/OtherProjectsMobileView";
import OtherProjectsStandardView from "./OtherProjects/OtherProjectsStandardView";

interface IOtherProjectsProps {
  projectWorks: IProjectInfo[];
  theme: IStyles;
}

export const OtherProjects: React.FC<IOtherProjectsProps> = ({
  projectWorks,
  theme,
}) => {
  return (
    <ProfileSection id={"WorkSection"} title={"Other Projects"} theme={theme}>
      <OtherProjectsStandardView projectWorks={projectWorks} styling={theme} />
      {/* TODO Mobile */}
      <OtherProjectsMobileView projectWorks={projectWorks} styling={theme} />
    </ProfileSection>
  );
};

export default OtherProjects;
