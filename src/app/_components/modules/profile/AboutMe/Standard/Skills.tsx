import React from "react";
import { IAboutMe } from "@/app/_models/user";
import ListBlock from "../ListBlock";

interface ISkills {
  aboutMe: IAboutMe;
}

export const Skills: React.FC<ISkills> = ({ aboutMe }) => {
  const styles = {
    skillsContainer: `hidden sm:flex pl-4 border-2 order-solid rounded-l-md z-15`,
  };

  return (
    <div className={styles.skillsContainer}>
      <ListBlock
        title="Languages"
        listProps={aboutMe.languages}
        orientation={"vertical"}
      />
      <ListBlock
        title="Tools"
        listProps={aboutMe.tools}
        orientation={"vertical"}

      />
    </div>
  );
};

export default Skills;
