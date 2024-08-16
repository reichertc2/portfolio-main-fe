import { user } from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import Experience from "@/app/_components/modules/profile/Experience";
import { theme } from "../../../../data/theme";


interface IAExperiencePageProps {}

const ExperiencePage: React.FC<IAExperiencePageProps> = () => {
  return (
    <MainContainer>
      <Experience
        jobExperience={user["jobs"]}
        theme={theme}
      />
    </MainContainer>
  );
};

export default ExperiencePage;
