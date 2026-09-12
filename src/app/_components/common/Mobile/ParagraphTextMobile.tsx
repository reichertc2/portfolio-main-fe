import React from "react";

interface IParagraphTextMobileProps {
  text: string;
}

export const ParagraphTextMobile: React.FC<IParagraphTextMobileProps> = ({
  text,
}) => {
  const styles = {
    text: `text-text dark:text-text-dark py-2 text-sm`,
  };

  return <p className={styles.text}>{text}</p>;
};

export default ParagraphTextMobile;
