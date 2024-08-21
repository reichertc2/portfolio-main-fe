import React from "react";
import { IJobInfo } from "@/app/_models/user";

interface IExperienceTimelineItemProps {
  jobExperience: IJobInfo;
}

export const ExperienceTimelineItem: React.FC<IExperienceTimelineItemProps> = ({
  jobExperience,
}) => {
  const styles = {
    timeline: ``,
    // timeline: `relative  w-full m-2-auto relative after:content-[''] after:absolute after:w-1 after:h-full after:top-0 after:left after:-ml-[3px] after:z-[-1] after:bg-slate-200`,
    container: `relative p-4 w-full`,
    textBox: `relative p-2 border-2`,
    header: `text-sm`,
    tenure: `text-xs`,
    position: `text-xs`,
    summary: `pt-2 text-xs`,
    arrow: `absolute top-[10px] left-[-12px] z-[1] h-0 w-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-l-red-500`,
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h3 className={styles.header}>
            {jobExperience.CompanyName} --{" "}
            <span className={styles.position}>{jobExperience.Position}</span>
          </h3>
          <p className={styles.tenure}>{jobExperience.Tenure}</p>
          <p className={styles.summary}>{jobExperience.BulletPoints}</p>
          <span className={styles.arrow}></span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimelineItem;
