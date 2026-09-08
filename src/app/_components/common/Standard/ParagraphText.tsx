import React from "react";

interface IParagraphTextProps {
  text: string;
}

export const ParagraphText: React.FC<IParagraphTextProps> = ({
  text,
}) => {
  const styles = {
    text: `text-text dark:text-text-dark py-2`,
  };

  return <p className={styles.text}>{text}</p>;
};

export default ParagraphText;
