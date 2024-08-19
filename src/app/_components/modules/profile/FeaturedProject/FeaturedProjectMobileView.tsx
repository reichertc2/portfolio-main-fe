import React from "react";
import UnderConstruction from "@/app/_components/common/UnderConstruction";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface IFeaturedProjectMobileViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const FeaturedProjectMobileView: React.FC<
  IFeaturedProjectMobileViewProps
> = ({ projectWorks, styling }) => {
  const styles = {
    container: `sm:hidden flex`,
  };

  return (
    <div className={styles.container}>
      <UnderConstruction />
    </div>
  );
};

export default FeaturedProjectMobileView;
