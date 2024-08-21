import React from "react";
import { IStyles } from "@/app/_models/styles";

interface IBasicSectionHeader {
  headerTitle: string;
  theme: IStyles;
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({
  headerTitle,
  theme,
}) => {
  const styles = {
    container: `flex justify-self-start text-xl dark:${theme.texts.headerDark} font-semibold w-full`,
    title: `border-gray-200 md:border-2 md:order-solid md:w-1/4 rounded-t-md px-2  py-1 `,
  };
  return (
    <h3 className={styles.container}>
      <div className={styles.title}>{headerTitle}</div>
    </h3>
  );
};

export default BasicSectionHeader;
