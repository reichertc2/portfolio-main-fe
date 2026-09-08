import React from "react";
import ParagraphText from "../../../../common/Standard/ParagraphText";

interface ISummaryBio {
  elevator: string[];
}

export const SummaryBio: React.FC<ISummaryBio> = ({ elevator }) => {
  const styles = {
    container: `w-50 p-4`,
    containerStandard: "hidden sm:flex flex-col",
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerStandard}>
        {elevator.map((text, idx) => (
          <ParagraphText key={`${text}-${idx}`} text={text}  />
        ))}
      </div>
    </div>
  );
};

export default SummaryBio;
