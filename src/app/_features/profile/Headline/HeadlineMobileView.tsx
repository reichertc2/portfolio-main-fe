import React from "react";
import {IProfile, IProjectInfo} from "@/app/_models/user";

interface IHeadlineMobileViewProps {
    headLine: IProfile;
    featuredProject: IProjectInfo[];
}

export const HeadlineMobileView: React.FC<IHeadlineMobileViewProps> = ({
                                                                           // headLine,
                                                                           // featuredProject
                                                                       }) => {
    const styles = {
        container: `sm:hidden flex`,

    };

    return (
        <div className={styles.container}>
            {/*<FeaturedProjectMobileView projectWorks={featuredProject}/>*/}
        </div>
    );
};

export default HeadlineMobileView;
