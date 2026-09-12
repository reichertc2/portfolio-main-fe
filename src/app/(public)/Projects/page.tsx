import {user} from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import ProjectWorks from "@/app/_features/profile/ProjectWorks";
import React from "react";

interface IProjectsPageProps {
}

const ProjectsPage: React.FC<IProjectsPageProps> = () => {
    return (
        <MainContainer>
            <ProjectWorks userData={user}/>
        </MainContainer>
    );
};

export default ProjectsPage;
