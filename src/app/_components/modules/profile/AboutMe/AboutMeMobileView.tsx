"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ListBlock from "./ListBlock";
import { SummaryBioMobile } from "./Mobile/SummaryBioMobile";

interface IAboutMeMobileViewProps {
  aboutMe: IAboutMe;
}

export const AboutMeMobileView: React.FC<IAboutMeMobileViewProps> = ({
  aboutMe,
}) => {
  const [moreButton, setMoreButton] = useState<boolean>(true);

  const styles = {
    bioContainer: `sm:hidden flex flex-col justify-start p-1 w-full items-center`,
    bioImageContainer: `w-11/12`,
    bioImage: `rounded-md w-9/12`,
    skillsContainer: `sm:hidden flex`,
  };

  return (
    <>
      {/* Mobile */}

      <div className={styles.bioContainer}>
        <div className={styles.bioImageContainer}>
          <Image
            className={styles.bioImage}
            src={aboutMe.profileImage}
            alt="profileImage"
          />
        </div>

        <SummaryBioMobile
          elevator={aboutMe.elevator}
          moreButton={moreButton}
          setMoreButton={setMoreButton}
        />
      </div>
      {!moreButton && (
        <>
          <div className={styles.skillsContainer}>
            <ListBlock
              title="Languages"
              listProps={aboutMe.languages}
              orientation={"vertical"}
            />
          </div>
          <div className={styles.skillsContainer}>
            <ListBlock
              title="Tools"
              listProps={aboutMe.tools}
              orientation={"vertical"}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AboutMeMobileView;
