import React from "react";
import {IProfile} from "@/app/_models/user";

interface IPersonaContainerProps {
    persona: IProfile;
}

export const PersonaContainer: React.FC<IPersonaContainerProps> = ({
                                                                       persona,
                                                                   }) => {
    const styles = {
        container: `block w-full mt-6 mb-4`,
        mainHeadline: `dark:text-text-dark text-3xl sm:text-4xl md:text-6xl font-semibold py-1 leading-tight`,
        subHeadline: `dark:text-text-dark text-base sm:text-lg md:text-xl font-semibold italic pt-1 pb-3 opacity-70`,
        quickDescription: `dark:text-text-dark text-sm sm:text-base md:text-md font-semibold italic pt-1 pb-3 opacity-70`,
    };

    return (
        <div className={styles.container}>
            <p className={styles.mainHeadline}>{persona.name}</p>
            <p className={styles.subHeadline}>
                {persona.headline}
                {persona.quickDescription ? ` — ${persona.quickDescription}` : ""}
            </p>
        </div>
    );
};

export default PersonaContainer;
