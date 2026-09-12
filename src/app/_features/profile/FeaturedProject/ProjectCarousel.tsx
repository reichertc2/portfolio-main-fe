import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import ProjectImage from "./Standard/ProjectImage";
import ProjectInfo from "./Standard/ProjectInfo";

interface IProjectCarouselProps {
  project: IProjectInfo;
}

export const ProjectCarousel: React.FC<IProjectCarouselProps> = ({
  project,
}) => {
  const styles = {
    container: "py-8",
  };

  return (
    <div key={project["id"]} className={styles.container}>
      <ProjectImage image={project.images[0]} />

      <ProjectInfo project={project} />
    </div>
  );
};

export default ProjectCarousel;
