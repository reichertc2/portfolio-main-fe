import React from "react";
import { IJobInfo } from "@/models/user";
import UnderConstruction from "@/components/common/UnderConstruction";
import { IStyles } from "@/models/styles";


interface IExperienceMobileViewProps {
    jobExperience: IJobInfo[];
    styling?: IStyles;
}

export const ExperienceMobileView: React.FC<IExperienceMobileViewProps> = ({ jobExperience, styling }) => {

    const styles = {
        container: `sm:hidden flex`
    }
    
    return (

        <div className={styles.container}>
            <UnderConstruction />
        </div>

    )
}

export default ExperienceMobileView;