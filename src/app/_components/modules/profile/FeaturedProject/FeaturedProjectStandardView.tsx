import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProjectBasic from "./ProjectBasic";

interface IFeaturedProjectStandardViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const FeaturedProjectStandardView: React.FC<
  IFeaturedProjectStandardViewProps
> = ({ projectWorks, styling }) => {
  const styles = {
    container: `hidden sm:block border-gray-200 border-2 border-solid`,
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
