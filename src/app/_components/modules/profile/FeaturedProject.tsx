import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import FeaturedProjectMobileView from "./FeaturedProject/FeaturedProjectMobileView";
import FeaturedProjectStandardView from "./FeaturedProject/FeaturedProjectStandardView";

interface IFeaturedProjectProps {
  projectWorks: IProjectInfo[];
}

export const FeaturedProject: React.FC<IFeaturedProjectProps> = ({
  projectWorks,
}) => {
  return (
    <ProfileSection id={"WorkSection"} title={"Featured Project"} >
      <FeaturedProjectStandardView
        projectWorks={projectWorks}
      />
      <FeaturedProjectMobileView projectWorks={projectWorks}  />
    </ProfileSection>
  );
};

export default FeaturedProject;
