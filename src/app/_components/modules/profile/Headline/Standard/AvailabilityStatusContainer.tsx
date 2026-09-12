import React from "react";
import {IWorkStatus} from "@/app/_models/user";

interface IAvailabilityStatusContainerProps {
    availability: IWorkStatus;
}

export const AvailabilityStatusContainer: React.FC<
    IAvailabilityStatusContainerProps
> = ({availability}) => {
    const isOpen =
        availability.contract || availability.fullTime || !availability.notOpen;

    const styles = {
        container: `block px-2 py-1 text-text dark:text-text-dark rounded-xl w-full sm:w-auto md:w-1/4`,
        statusIndicator: "inline-block w-3 h-3 md:w-4 md:h-4 rounded-full align-middle",
        text: "inline-block ml-2 text-sm md:text-base align-middle",
        available: `bg-emerald-600/25 border-emerald-600 border-solid border`,
        notAvailable: `bg-rose-900/25 border-rose-900 border-solid border`,
        availableIndicator: `bg-emerald-600 border-emerald-600 border-solid border`,
        notAvailableIndicator: `bg-rose-900 border-rose-900 border-solid border`,
    };

    return (
        <div
            className={`${styles.container} ${
                isOpen ? styles.available : styles.notAvailable
            }`}
        >
            <div
                className={`${styles.statusIndicator} ${
                    isOpen
                        ? styles.availableIndicator
                        : styles.notAvailableIndicator
                }`}
            />
            {isOpen ? (
                <p className={styles.text}>
                    Open to {availability.fullTime ? "full time" : "contract"}{" "}
                    work.
                </p>
            ) : (
                <p className={styles.text}>Not available for work.</p>
            )}
        </div>
    );
};

export default AvailabilityStatusContainer;