import React from "react";
import { theme } from "../../../../../data/theme";


interface IGenericTextProps {
  text?: string;
  children?: React.ReactNode
}

export const GenericText: React.FC<IGenericTextProps> = ({
  text,
  children
}) => {
  const styles = {
    header: `py-1 ${theme.texts.light} dark:${theme.texts.dark} text-lg font-semibold`,
  };

  return <div  className={styles.header}>{text ? text: children}</div>;
};

export default GenericText;
