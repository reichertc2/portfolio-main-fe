import React from "react";
import ListBlock from "../ListBlock";

interface ISkills {
    title: string;
    skills: string[];
}

export const Skills: React.FC<ISkills> = ({title, skills}) => {
    const styles = {
        skillsContainer: `my-4 pl-4`,
    };

    return (
        <div className={styles.skillsContainer}>
            <ListBlock
                title={title}
                listProps={skills}
            />

        </div>
    );
};

export default Skills;
