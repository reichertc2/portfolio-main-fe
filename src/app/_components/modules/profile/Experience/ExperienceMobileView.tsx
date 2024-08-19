import React from "react";
import { IJobInfo } from "@/app/_models/user";
import UnderConstruction from "@/app/_components/common/UnderConstruction";
import { IStyles } from "@/app/_models/styles";

interface IExperienceMobileViewProps {
  jobExperience: IJobInfo[];
  styling?: IStyles;
}

export const ExperienceMobileView: React.FC<IExperienceMobileViewProps> = ({
  jobExperience,
  styling,
}) => {
  const styles = {
    container: `sm:hidden flex`,
  };

  return (
    <div className={styles.container}>
      <UnderConstruction />
    </div>
  );
};

export default ExperienceMobileView;
