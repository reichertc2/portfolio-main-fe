import React from "react";


interface ISubHeaderGenericTextProps {
  text: string;
}

export const SubHeaderGenericText: React.FC<ISubHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 text-text dark:text-text-dark text-lg font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default SubHeaderGenericText;
