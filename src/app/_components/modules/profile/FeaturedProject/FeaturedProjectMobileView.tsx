import React from "react";
import UnderConstruction from "@/app/_components/common/UnderConstruction";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProjectInfoMobile from "./Mobile/ProjectInfoMobile";

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
      {projectWorks.map((project: IProjectInfo) => (
        <ProjectInfoMobile key={"featuredProject"} project={project} />
      ))}{" "}
    </div>
  );
};

export default FeaturedProjectMobileView;
