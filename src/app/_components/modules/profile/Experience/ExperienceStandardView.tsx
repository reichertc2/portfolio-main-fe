import React from "react";
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import TabSelector from "./Standard/TabSelector";

interface IExperienceStandardViewProps {
  jobExperience: IJobInfo[];
  styling?: IStyles;
}

export const ExperienceStandardView: React.FC<IExperienceStandardViewProps> = ({
  jobExperience,
  styling,
}) => {
  const styles = {
    container: `hidden sm:block`,
  };

  return (
    <div className={styles.container}>
      <TabSelector jobExperience={jobExperience} />
    </div>
  );
};

export default ExperienceStandardView;
