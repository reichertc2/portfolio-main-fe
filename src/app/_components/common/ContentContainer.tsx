import React from "react";
import BasicSectionHeader from "./headers/BasicSectionHeader";

interface IProfileSectionProps {
    id: string;
    title?: string;
    subTitle?: string;
    children: React.ReactNode;
}

export const ContentContainer: React.FC<IProfileSectionProps> = ({
                                                                     id,
                                                                     title,
                                                                     subTitle,
                                                                     children,
                                                                 }) => {
    const styles = {
        container: `min-h-[85vh] flex flex-col justify-top md:w-3/4 m-auto`,
    };

    return (
        <section id={id} className={styles.container}>
            {title && <BasicSectionHeader headerTitle={title} subHeaderTitle={subTitle}/>}

            {children}
        </section>
    );
};

export default ContentContainer;
