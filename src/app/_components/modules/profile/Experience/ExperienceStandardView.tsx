import React from "react";
import { IJobInfo } from "@/app/_models/user";
import TabSelector from "./Standard/TabSelector";

interface IExperienceStandardViewProps {
  jobExperience: IJobInfo[];
}

export const ExperienceStandardView: React.FC<IExperienceStandardViewProps> = ({
  jobExperience,
}) => {
  const styles = {
    container: `hidden sm:block border-2 border-solid w-full`,
  };

  return (
    <div className={styles.container}>
      <TabSelector jobExperience={jobExperience} />
    </div>
  );
};

export default ExperienceStandardView;
