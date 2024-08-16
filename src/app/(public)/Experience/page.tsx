import { user } from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import Experience from "@/app/_components/modules/profile/Experience";

interface IAExperiencePageProps {}

const ExperiencePage: React.FC<IAExperiencePageProps> = () => {
  return (
    <MainContainer>
      <Experience
        jobExperience={user["jobs"]}
        //styling={styling}
      />
    </MainContainer>
  );
};

export default ExperiencePage;
