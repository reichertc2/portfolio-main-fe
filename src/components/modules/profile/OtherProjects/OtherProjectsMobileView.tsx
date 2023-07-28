import { IProjectInfo } from "@/models/user";
import UnderConstruction from "@/components/common/UnderConstruction";
import { IStyles } from "@/models/styles";

interface IOtherProjectsMobileViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const OtherProjectsMobileView: React.FC<IOtherProjectsMobileViewProps> = ({ projectWorks, styling }) => {
  return (

    <div className={`sm:hidden flex`}>
      <UnderConstruction />
    </div>

  );
}

export default OtherProjectsMobileView;