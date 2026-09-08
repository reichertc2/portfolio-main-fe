import React from "react";

interface IProjectInfoToolListProps {
  toolList: string[];
}

export const ProjectInfoToolList: React.FC<IProjectInfoToolListProps> = ({
  toolList,
}) => {
  const styles = {
    toolListContainer: "text-right p-3 pr-4",
    tool: `inline-block px-2 dark:text-text-dark border-2 border-solid rounded-full mx-2 font-bold`,
  };

  return (
    <ul className={styles.toolListContainer}>
      {toolList.map((tool) => (
        <li key={tool} className={styles.tool}>
          {tool}
        </li>
      ))}
    </ul>
  );
};

export default ProjectInfoToolList;
