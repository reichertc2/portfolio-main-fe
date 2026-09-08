import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProjectInfoMobile from "./Mobile/ProjectInfoMobile";

interface IFeaturedProjectMobileViewProps {
  projectWorks: IProjectInfo[];

}

export const FeaturedProjectMobileView: React.FC<
  IFeaturedProjectMobileViewProps
> = ({ projectWorks }) => {
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
