import React from "react";
import {IContactInfo} from "@/app/_models/user";

interface ICallToActionHeaderProps {
    contactInfo: IContactInfo;
}

export const CallToActionHeader: React.FC<ICallToActionHeaderProps> = ({
                                                                           contactInfo,
                                                                       }) => {
    const styles = {
        container: "w-full m-4",
        header: `text-5xl font-semibold italic underline underline-offset-4 text-text dark:text-text-dark text-left pt-1 pb-3 opacity-70`,
        info: `text-text dark:text-text-dark pt-2 px-6 text-left `,

    };

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Let's Talk</h2>
            <p className={styles.info}>{contactInfo.contactBrief}</p>
        </div>
    );
};

export default CallToActionHeader;
