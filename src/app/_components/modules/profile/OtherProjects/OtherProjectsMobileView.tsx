import React from "react";
import { IProjectInfo } from "@/app/_models/user";
import UnderConstruction from "@/app/_components/common/UnderConstruction";

interface IOtherProjectsMobileViewProps {
  projectWorks: IProjectInfo[];
}

export const OtherProjectsMobileView: React.FC<
  IOtherProjectsMobileViewProps
> = ({ projectWorks }) => {
  return (
    <div className={`sm:hidden flex`}>
      <UnderConstruction />
    </div>
  );
};

export default OtherProjectsMobileView;
