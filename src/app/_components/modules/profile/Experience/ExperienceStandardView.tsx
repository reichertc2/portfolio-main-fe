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
    container: `hidden sm:block border-gray-200 border-2 border-solid w-full`,
  };

  return (
    <div className={styles.container}>
      <TabSelector jobExperience={jobExperience} />
    </div>
  );
};

export default ExperienceStandardView;
