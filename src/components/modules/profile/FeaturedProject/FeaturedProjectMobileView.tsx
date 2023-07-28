import UnderConstruction from "@/components/common/UnderConstruction";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";


interface IFeaturedProjectMobileViewProps {
    projectWorks: IProjectInfo[],
    styling?: IStyles;
}

export const FeaturedProjectMobileView: React.FC<IFeaturedProjectMobileViewProps> = ({ projectWorks, styling }) => {

    const styles = {
        container: `sm:hidden flex`
    }

    return (

        <div className={styles.container}>
            <UnderConstruction />
        </div>

    );
}

export default FeaturedProjectMobileView;