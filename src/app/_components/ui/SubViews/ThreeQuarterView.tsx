import React from "react";

interface IThreeQuarterViewProps {
    children: React.ReactNode;
    divider?: boolean;
}

export const ThreeQuarterView: React.FC<IThreeQuarterViewProps> = ({
                                                                       children,
                                                                       divider,
                                                                   }) => {
    const styles = {
        outerContainer: `flex justify-center`,
        innerContainer: divider
            ? `flex flex-wrap py-4 md:w-3/4 w-full border-solid border-t-2 text-text dark:text-text-dark`
            : `flex flex-wrap py-4 md:w-3/4 w-full text-text dark:text-text-dark`,
    };
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>{children}</div>
        </div>
    );
};

export default ThreeQuarterView;
