import React from "react";
import { IJobInfo } from "@/app/_models/user";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

interface IExperienceTimelineProps {
  jobExperience: IJobInfo[];
}

export const ExperienceTimeline: React.FC<IExperienceTimelineProps> = ({
  jobExperience,
}) => {
  const styles = {
    container: `animate-moveline`,
  };

  return (
    <div className={styles.container}>
      {jobExperience.map((company) => (
        <ExperienceTimelineItem jobExperience={company} key={company.Tenure}/>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
