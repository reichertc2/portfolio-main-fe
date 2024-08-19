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
  return (
    <h3
      className={`flex justify-self-start text-xl dark:${theme.texts.headerDark} py-1 font-semibold `}
    >
      {headerTitle}
    </h3>
  );
};

export default BasicSectionHeader;
