import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import UnderConstruction from "@/app/_components/common/UnderConstruction";
import { IStyles } from "@/app/_models/styles";

interface IOtherProjectsMobileViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const OtherProjectsMobileView: React.FC<
  IOtherProjectsMobileViewProps
> = ({ projectWorks, styling }) => {
  return (
    <div className={`sm:hidden flex`}>
      <UnderConstruction />
    </div>
  );
};

export default OtherProjectsMobileView;
