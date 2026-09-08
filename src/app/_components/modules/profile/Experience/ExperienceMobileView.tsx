import React from "react";
import { IJobInfo } from "@/app/_models/user";
import ExperienceTimeline from "./Mobile/ExperienceTimeline";

interface IExperienceMobileViewProps {
  jobExperience: IJobInfo[];

}

export const ExperienceMobileView: React.FC<IExperienceMobileViewProps> = ({
  jobExperience,
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
