"use client"

import { IStyles } from "@/app/default/common/MainClientPage";

interface ISummaryBio {
    elevator: string[];
    styles: IStyles;
}

export const SummaryBio: React.FC<ISummaryBio> = ({ elevator, styles }) => {

    return (
        <div className={`w-50`}>
            <div className="hidden sm:flex flex-col">

                {
                    elevator.map((text, idx) =>
                        <p
                            key={`${text}-${idx}`}
                            className={`dark:${styles.darkStandardText} py-2`}
                        >
                            {text}
                        </p>
                    )
                }

            </div>
            {/* Mobile */}
            <div className="sm:hidden w-50">

                {
                    elevator.map((text, idx) =>
                        <p
                            key={`${text}-${idx}`}
                            className={`dark:${styles.darkStandardText} py-2 text-sm`}
                        >
                            {text}
                        </p>
                    )
                }

            </div>
        </div>
    )
}

export default SummaryBio;