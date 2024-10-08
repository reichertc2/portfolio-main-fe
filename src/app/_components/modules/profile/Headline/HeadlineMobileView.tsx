import React from "react";
import { IProfile } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface IHeadlineMobileViewProps {
  headLine: IProfile;
  theme: IStyles;
}

export const HeadlineMobileView: React.FC<IHeadlineMobileViewProps> = ({
  headLine,
  theme,
}) => {
  const styles = {
    container: `sm:hidden block`,
    mainHeadline: `dark:text-stone-100 text-xl font-semibold py-1`,
    subHeadline: `dark:text-sky-200 text-sm font-semibold italic pb-3 opacity-70`,
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainHeadline}>{headLine["name"]}</p>
      <p className={styles.subHeadline}>{headLine["headline"]}</p>
    </div>
  );
};

export default HeadlineMobileView;
