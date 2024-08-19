import React from "react";
import { getCurrentYear } from "../../../_utilities/dateUtils";

interface ICopyrightTextProps {
  text: string;
}

export const CopyrightText: React.FC<ICopyrightTextProps> = ({ text }) => {
  const styles = {
    textContainer: `m-auto m-0 inline`,
  };

  return (
    <div className={styles.textContainer}>
      {text} &copy; {getCurrentYear()}
    </div>
  );
};

export default CopyrightText;
