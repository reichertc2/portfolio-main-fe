import React from "react";
import { IProfile } from "@/app/_models/user";

interface IHeadlineMobileViewProps {
  headLine: IProfile;
}

export const HeadlineMobileView: React.FC<IHeadlineMobileViewProps> = ({
  headLine,
}) => {
  const styles = {
    container: `sm:hidden block`,
    mainHeadline: `dark:text-text text-xl font-semibold py-1`,
    subHeadline: `dark:text-text text-sm font-semibold italic pb-3 opacity-70`,
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainHeadline}>{headLine["name"]}</p>
      <p className={styles.subHeadline}>{headLine["headline"]}</p>
    </div>
  );
};

export default HeadlineMobileView;
