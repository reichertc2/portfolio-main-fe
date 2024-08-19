import AboutMe from "@/app/_components/modules/profile/AboutMe";
import { user } from "../../../../data/user";
import { theme } from "../../../../data/theme";
import MainContainer from "@/app/_components/common/MainContainer";

interface IAboutMePageProps {}

const AboutMePage: React.FC<IAboutMePageProps> = () => {
  return (
    <MainContainer>
      <AboutMe aboutMe={user["aboutMe"]} theme={theme} />
    </MainContainer>
  );
};

export default AboutMePage;
