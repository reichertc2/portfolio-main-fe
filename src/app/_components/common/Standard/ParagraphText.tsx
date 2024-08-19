import React from "react";
import { IStyles } from "@/app/_models/styles";

interface IParagraphTextProps {
  text: string;
  theme: IStyles;
}

export const ParagraphText: React.FC<IParagraphTextProps> = ({
  text,
  theme,
}) => {
  const styles = {
    text: `dark:${theme.texts.dark} py-2`,
  };

  return <p className={styles.text}>{text}</p>;
};

export default ParagraphText;
