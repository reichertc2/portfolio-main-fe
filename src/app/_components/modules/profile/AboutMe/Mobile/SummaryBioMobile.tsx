import React, { useState } from "react";
import ParagraphTextMobile from "../../../../common/Mobile/ParagraphTextMobile";
import { IStyles } from "@/app/_models/styles";
import MoreButton from "./MoreButton";

interface ISummaryBioMobileProps {
  elevator: string[];
  theme: IStyles;
  moreButton: boolean;
  setMoreButton: (click: boolean) => void;
}

export const SummaryBioMobile: React.FC<ISummaryBioMobileProps> = ({
  elevator,
  theme,
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
            theme={theme}
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
            theme={theme}
            key={`${text}-${idx}`}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

export default SummaryBioMobile;
