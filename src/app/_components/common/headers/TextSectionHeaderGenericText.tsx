import React from "react";


interface ITextSectionHeaderGenericTextProps {
  text: string;
}

export const TextSectionHeaderGenericText: React.FC<ITextSectionHeaderGenericTextProps> = ({
  text,
}) => {
  const styles = {
    header: `py-1 text-text dark:text-text-dark text-base font-semibold`,
  };

  return <div className={styles.header}>{text}</div>;
};

export default TextSectionHeaderGenericText;
