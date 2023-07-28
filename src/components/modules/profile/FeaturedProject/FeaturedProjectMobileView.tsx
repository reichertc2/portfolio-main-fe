import UnderConstruction from "@/components/common/UnderConstruction";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";


interface IFeaturedProjectMobileViewProps {
    projectWorks: IProjectInfo[],
    styling?: IStyles;
}

export const FeaturedProjectMobileView: React.FC<IFeaturedProjectMobileViewProps> = ({ projectWorks, styling }) => {
    return (

        <div className={`sm:hidden flex`}>
            <UnderConstruction />
        </div>

    );
}

export default FeaturedProjectMobileView;