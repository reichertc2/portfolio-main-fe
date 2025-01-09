import React from "react";
import ThreeQuarterView from "../../ui/SubViews/ThreeQuarterView";
import HeaderGenericText from "./HeaderGenericText";

interface IPageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  const styles = {
    header: `text-3xl font-bold mb-4 text-zinc-800`,
  };

  return (
    <ThreeQuarterView>
      <HeaderGenericText text={title} />
    </ThreeQuarterView>
  );
};

export default PageHeader;
