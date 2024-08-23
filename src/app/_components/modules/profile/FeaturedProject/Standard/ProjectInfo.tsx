import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProjectInfoHeader from "./ProjectInfoHeader";
import ProjectInfoToolList from "./ProjectInfoToolList";
import ProjectInfoLinks from "./ProjectInfoLinks";
import ProjectInfoDescription from "./ProjectInfoDescription";

interface IProjectInfoProps {
  project: IProjectInfo;
}

export const ProjectInfo: React.FC<IProjectInfoProps> = ({ project }) => {
  const styles = {
    container: "inline-block w-3/5 align-top border-slate-500 border-solid border-r-4",
  };

  return (
    <div className={styles.container}>
      <ProjectInfoHeader title={project.title} />
      <ProjectInfoDescription description={project.description} />
      <ProjectInfoToolList toolList={project.toolList} />
      <ProjectInfoLinks urlList={project.urlList} />
    </div>
  );
};

export default ProjectInfo;
