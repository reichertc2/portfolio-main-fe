import { user } from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import FeaturedProject from "@/app/_components/modules/profile/FeaturedProject";
import OtherProjects from "@/app/_components/modules/profile/OtherProjects";

interface IProjectsPageProps {}

const ProjectsPage: React.FC<IProjectsPageProps> = () => {
  return (
    <MainContainer>
      <FeaturedProject
        projectWorks={user["projects"]}
        //styling={styling}
      />
      <OtherProjects
        projectWorks={user["subprojects"]}
        //styling={styling}
      />
    </MainContainer>
  );
};

export default ProjectsPage;
