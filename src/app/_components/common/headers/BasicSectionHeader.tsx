import React from "react";

interface IBasicSectionHeader {
    headerTitle: string;
    subHeaderTitle?: string;
}

export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({
                                                                      headerTitle,
                                                                      subHeaderTitle,
                                                                  }) => {
    const styles = {
        container: `flex justify-self-start flex-col mb-6 py-4 text-2xl text-text dark:text-text-dark font-semibold w-full`,
        title: `text-3xl px-2 py-1`,
        subPhrase: `text-sm pl-4 font-medium text-text dark:text-text-dark`,
    };
    return (
        <h3 className={styles.container}>
            <div className={styles.title}>{headerTitle}</div>
            <div className={styles.subPhrase}>{subHeaderTitle}</div>
        </h3>
    );
};

export default BasicSectionHeader;
