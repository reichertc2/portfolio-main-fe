import React from "react";


interface IHeaderGenericTextProps {
  text: string;
}

export const HeaderGenericText: React.FC<IHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 text-text dark:text-text-dark text-xl font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default HeaderGenericText;
