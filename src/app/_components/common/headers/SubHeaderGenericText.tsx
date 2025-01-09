import React from "react";
import { theme } from "../../../../../data/theme";


interface ISubHeaderGenericTextProps {
  text: string;
}

export const SubHeaderGenericText: React.FC<ISubHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 ${theme.texts.headerLight} dark:${theme.texts.headerDark} text-lg font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default SubHeaderGenericText;
