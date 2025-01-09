import React from "react";

interface IHeaderLogoTextProps {
  text: string;
}

export const HeaderLogoText: React.FC<IHeaderLogoTextProps> = ({ text }) => {
  const styles = {
    header: `flex-1`,
  };

  return <h2 className={styles.header}>{text}</h2>;
};

export default HeaderLogoText;
