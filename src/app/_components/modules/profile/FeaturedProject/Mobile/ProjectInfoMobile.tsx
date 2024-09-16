import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProjectInfoDescription from "../Standard/ProjectInfoDescription";
import ProjectInfoHeader from "../Standard/ProjectInfoHeader";
import ProjectInfoLinks from "../Standard/ProjectInfoLinks";
import ProjectInfoToolList from "../Standard/ProjectInfoToolList";

interface IProjectInfoProps {
  project: IProjectInfo;
}

export const ProjectInfoMobile: React.FC<IProjectInfoProps> = ({ project }) => {
  const styles = {
    container:
      "inline-block w-3/5 align-top border-slate-500 border-solid border-r-4",
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

export default ProjectInfoMobile;
