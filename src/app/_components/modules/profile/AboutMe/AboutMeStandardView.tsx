import React from "react";
import Image from "next/image";
import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import SummaryBio from "./Standard/SummaryBio";
import Skills from "./Standard/Skills";

interface IAboutMeStandardViewProps {
  aboutMe: IAboutMe;
  theme: IStyles;
}

export const AboutMeStandardView: React.FC<IAboutMeStandardViewProps> = ({
  aboutMe,
  theme,
}) => {
  const styles = {
    bioContainer: `hidden sm:flex justify-start w-full border-gray-200 border-2 border-solid`,
    summaryContainer: `w-1/2`,
    innerContainer: `flex items-center flex-col justify-center w-1/2`,
    skillsContainer: `ml-auto w-3/4 pb-1`,
    imageContainer: `p-2 w-2/3 m-0`,
    bioImage: `rounded-md `,
  };

  return (
    <div className={styles.bioContainer}>
      <div className={styles.summaryContainer}>
        <SummaryBio elevator={aboutMe.elevator} theme={theme} />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.bioImage}
            src={aboutMe.profileImage}
            alt="profileImage"
          />
        </div>
        <div className={styles.skillsContainer}>
          <Skills aboutMe={aboutMe} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeStandardView;
