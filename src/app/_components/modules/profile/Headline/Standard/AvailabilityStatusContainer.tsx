import React from "react";
import {IWorkStatus} from "@/app/_models/user";

interface IAvailabilityStatusContainerProps {
    availability: IWorkStatus;
}

export const AvailabilityStatusContainer: React.FC<IAvailabilityStatusContainerProps> = ({
                                                                                             availability,
                                                                                         }) => {
    const styles = {
        container: `hidden md:block px-2 py-1 text-text dark:text-text-dark rounded-xl w-1/4`,
        statusIndicator: "inline-block w-4 h-4 rounded-full",
        text: "inline-block ml-2",
        available: ` bg-emerald-600/25 border-emerald-600 border-solid border-1`,
        notAvailable: `bg-rose-900/25 border-rose-900 border-solid border-1`,
        availableIndicator: ` bg-emerald-600 border-emerald-600 border-solid border-1`,
        notAvailableIndicator: `bg-rose-900 border-rose-900 border-solid border-1`,
    };

    return (
        <div
            className={`${styles.container} ${availability.contract || availability.fullTime || !availability.notOpen ? styles.available : styles.notAvailable}`}>
            <div
                className={` ${styles.statusIndicator} ${availability.contract || availability.fullTime || !availability.notOpen ? styles.availableIndicator : styles.notAvailableIndicator}`}></div>
            {
                availability.contract || availability.fullTime || !availability.notOpen ?
                    <p className={styles.text}>Open to {availability.fullTime ? " full time" : " contract"} work.</p> :
                    <p className={styles.text}>Not available for work.</p>
            }
        </div>
    );
};

export default AvailabilityStatusContainer;
