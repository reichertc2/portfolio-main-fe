import React, {useState} from "react";
import ParagraphTextMobile from "../../../../_components/common/Mobile/ParagraphTextMobile";
import MoreButton from "./MoreButton";

interface ISummaryBioMobileProps {
    elevator: string[];
    moreButton: boolean;
    setMoreButton: (click: boolean) => void;
}

export const SummaryBioMobile: React.FC<ISummaryBioMobileProps> = ({
                                                                       elevator,
                                                                       moreButton,
                                                                       setMoreButton
                                                                   }) => {

    const styles = {
        container: `w-50`,
        containerStandard: "sm:hidden w-50",
    };
    return (
        <div className={styles.container}>
            <div className={styles.containerStandard}>
                {moreButton && elevator && (
                    <ParagraphTextMobile
                        key={`${elevator[0]}-${elevator[0]}`}
                        text={elevator[0]}
                    />
                )}
                {moreButton && (
                    <MoreButton
                        moreButton={moreButton}
                        setMoreButton={setMoreButton}
                    />
                )}

                {!moreButton && elevator.map((text, idx) => (
                    <ParagraphTextMobile
                        key={`${text}-${idx}`}
                        text={text}
                    />
                ))}
            </div>
        </div>
    );
};

export default SummaryBioMobile;
