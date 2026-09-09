import React from "react";
import {IProfile} from "@/app/_models/user";

interface IPersonaContainerProps {
    persona: IProfile;
}

export const PersonaContainer: React.FC<IPersonaContainerProps> = ({
                                                                       persona,
                                                                   }) => {
    const styles = {
        container: `hidden md:block`,
        mainHeadline: `dark:text-text-dark text-6xl font-semibold py-1`,
        subHeadline: `dark:text-text-dark text-xl font-semibold italic pt-1 pb-3 opacity-70`,
        quickDescription: `dark:text-text-dark text-md font-semibold italic pt-1 pb-3 opacity-70`,
    };

    return (
        <div className={styles.container}>
            <p className={styles.mainHeadline}>{persona.name}</p>
            <p className={styles.subHeadline}>{persona.headline} -- {persona.quickDescription}</p>
        </div>
    );
};

export default PersonaContainer;
