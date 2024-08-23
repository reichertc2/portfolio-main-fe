import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProjectTile from "./Standard/ProjectTile";

interface IOtherProjectsStandardViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const OtherProjectsStandardView: React.FC<
  IOtherProjectsStandardViewProps
> = ({ projectWorks, styling }) => {
  const styles = {
    container: "hidden sm:grid inline-grid grid-cols-3 gap-3 border-gray-200 border-2 border-solid",
  };

  return (
    <div className={styles.container}>
      {projectWorks.map((project) => (
        <ProjectTile key={project["id"]} project={project} />
      ))}
    </div>
  );
};

export default OtherProjectsStandardView;
