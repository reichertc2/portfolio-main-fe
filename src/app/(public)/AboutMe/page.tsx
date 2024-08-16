import AboutMe from "@/app/_components/modules/profile/AboutMe";
import { user } from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";

interface IAboutMePageProps {}

const AboutMePage: React.FC<IAboutMePageProps> = () => {
  return (
    <MainContainer>
      <AboutMe
        aboutMe={user["aboutMe"]}
        //styling={styling}
      />
    </MainContainer>
  );
};

export default AboutMePage;
