import React from "react";
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ExperienceTimeline from "./Mobile/ExperienceTimeline";

interface IExperienceMobileViewProps {
  jobExperience: IJobInfo[];
  styling?: IStyles;
}

export const ExperienceMobileView: React.FC<IExperienceMobileViewProps> = ({
  jobExperience,
  styling,
}) => {
  const styles = {
    container: `sm:hidden sm:flex`,
  };

  return (
    <div className={styles.container}>
      <ExperienceTimeline jobExperience={jobExperience} />
    </div>
  );
};

export default ExperienceMobileView;
