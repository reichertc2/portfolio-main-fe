import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";
import FeaturedProjectMobileView from "./FeaturedProject/FeaturedProjectMobileView";
import FeaturedProjectStandardView from "./FeaturedProject/FeaturedProjectStandardView";

interface IFeaturedProjectProps {
  projectWorks: IProjectInfo[];
  theme: IStyles;
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({
  projectWorks,
  theme,
}) => {
  return (
    <ProfileSection id={"WorkSection"} title={"Featured Project"} theme={theme}>
      <FeaturedProjectStandardView
        projectWorks={projectWorks}
        styling={theme}
      />
      <FeaturedProjectMobileView projectWorks={projectWorks} styling={theme} />
    </ProfileSection>
  );
};

export default FeaturedProject;
