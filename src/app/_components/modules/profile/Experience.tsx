import React from "react";
import { IJobInfo } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import { IStyles } from "@/app/_models/styles";
import ExperienceMobileView from "./Experience/ExperienceMobileView";
import ExperienceStandardView from "./Experience/ExperienceStandardView";

interface IExperienceProps {
  jobExperience: IJobInfo[];
  theme: IStyles;
}

export const Experience: React.FC<IExperienceProps> = ({
  jobExperience,
  theme,
}) => {
  return (
    <ProfileSection id={"ExperienceSection"} title={"Experience"} theme={theme}>
      <ExperienceStandardView jobExperience={jobExperience} styling={theme} />
      <ExperienceMobileView jobExperience={jobExperience} styling={theme} />
    </ProfileSection>
  );
};

export default Experience;
