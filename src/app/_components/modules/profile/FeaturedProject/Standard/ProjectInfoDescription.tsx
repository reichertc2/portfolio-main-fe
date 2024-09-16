import React from "react";

interface IProjectInfoDescriptionProps {
  description: string;
}

export const ProjectInfoDescription: React.FC<IProjectInfoDescriptionProps> = ({
  description,
}) => {
  const styles = {
    projectDescription: `dark:text-slate-200 p-1 m-3 text-right pr-4`,
  };

  return <p className={styles.projectDescription}>{description}</p>;
};

export default ProjectInfoDescription;
