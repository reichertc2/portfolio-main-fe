import React from "react";
import { theme } from "../../../../../data/theme";


interface IHeaderGenericTextProps {
  text: string;
}

export const HeaderGenericText: React.FC<IHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 ${theme.texts.headerLight} dark:${theme.texts.headerDark} text-xl font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default HeaderGenericText;
