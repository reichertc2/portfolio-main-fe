import React from "react";
import { IJobInfo } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import { IStyles } from "@/app/_models/styles";
import ExperienceMobileView from "./Experience/ExperienceMobileView";
import ExperienceStandardView from "./Experience/ExperienceStandardView";

interface IExperienceProps {
  jobExperience: IJobInfo[];
}

export const Experience: React.FC<IExperienceProps> = ({
  jobExperience,
}) => {
  return (
    <ProfileSection id={"ExperienceSection"} title={"Experience"} >
      <ExperienceStandardView jobExperience={jobExperience}  />
      <ExperienceMobileView jobExperience={jobExperience}  />
    </ProfileSection>
  );
};

export default Experience;
