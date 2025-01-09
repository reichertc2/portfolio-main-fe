import React from "react";
import { theme } from "../../../../../data/theme";


interface ITextSectionHeaderGenericTextProps {
  text: string;
}

export const TextSectionHeaderGenericText: React.FC<ITextSectionHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 ${theme.texts.headerLight} dark:${theme.texts.headerDark} text-base font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default TextSectionHeaderGenericText;
