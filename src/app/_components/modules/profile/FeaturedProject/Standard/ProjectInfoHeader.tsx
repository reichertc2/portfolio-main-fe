import React from "react";

interface IProjectInfoHeaderProps {
  title: string;
}

export const ProjectInfoHeader: React.FC<IProjectInfoHeaderProps> = ({
  title,
}) => {
  const styles = {
    container:`flex w-full bg-gray-200 dark:bg-slate-500 rounded-l-md`,
    header: `flex-end pl-4 text-xl dark:text-stone-800 py-1 font-semibold text-left`,
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
    </div>
  );
};

export default ProjectInfoHeader;
