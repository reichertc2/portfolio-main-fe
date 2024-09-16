import React from "react";

interface IProjectInfoToolListProps {
  toolList: string[];
}

export const ProjectInfoToolList: React.FC<IProjectInfoToolListProps> = ({
  toolList,
}) => {
  const styles = {
    toolListContainer: "text-right p-3 pr-4",
    tool: `inline-block px-2 dark:text-stone-800 border-2 border-solid dark:border-slate-500 bg-gray-200 dark:bg-slate-500 rounded-full mx-2 font-bold`,
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
