import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProjectBasic from "./ProjectBasic";

interface IFeaturedProjectStandardViewProps {
  projectWorks: IProjectInfo[];
}

export const FeaturedProjectStandardView: React.FC<
  IFeaturedProjectStandardViewProps
> = ({ projectWorks}) => {
  const styles = {
    container: `hidden sm:block border-2 border-solid p-4`,
  };

  return (
    <div className={styles.container}>
      {projectWorks.map((project: IProjectInfo) => (
        <ProjectBasic key={"featuredProject"} project={project} />
      ))}
    </div>
  );
};

export default FeaturedProjectStandardView;
