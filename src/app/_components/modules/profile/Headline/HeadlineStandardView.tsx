import React from "react";
import { IProfile } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface IHeadlineStandardViewProps {
  headLine: IProfile;
  theme: IStyles;
}

export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({
  headLine,
  theme,
}) => {
  const styles = {
    container: `hidden md:block`,
    mainHeadline: `dark:text-stone-100 text-7xl font-semibold py-1`,
    subHeadline: `dark:text-sky-200 text-5xl font-semibold italic pt-1 pb-3 opacity-70`,
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainHeadline}>{headLine["name"]}</p>
      <p className={styles.subHeadline}>{headLine["headline"]}</p>
    </div>
  );
};

export default HeadlineStandardView;
