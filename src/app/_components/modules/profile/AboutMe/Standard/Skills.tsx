import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ListBlock from "../ListBlock";

interface ISkills {
  aboutMe: IAboutMe;
  theme: IStyles;
}

export const Skills: React.FC<ISkills> = ({ aboutMe, theme }) => {
  const styles = {
    skillsContainer: `hidden sm:flex pt-8`,
  };

  return (
    <div className={styles.skillsContainer}>
      <ListBlock
        title="Languages"
        listProps={aboutMe.languages}
        orientation={"vertical"}
        theme={theme}
      />
      <ListBlock
        title="Tools"
        listProps={aboutMe.tools}
        orientation={"vertical"}
        theme={theme}
      />
    </div>
  );
};

export default Skills;
