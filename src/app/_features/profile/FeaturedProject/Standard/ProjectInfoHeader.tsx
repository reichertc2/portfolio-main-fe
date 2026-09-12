import React from "react";

interface IProjectInfoHeaderProps {
    title: string;
}

export const ProjectInfoHeader: React.FC<IProjectInfoHeaderProps> = ({
                                                                         title,
                                                                     }) => {
    const styles = {
        container: `flex w-full rounded-l-md bg-secondary`,
        header: `flex-end pl-4 text-xl text-text-dark py-1 font-semibold text-left`,
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{title}</h3>
        </div>
    );
};

export default ProjectInfoHeader;
