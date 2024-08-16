import { IUserData } from "@/app/_models/user";
import Headline from "./Headline";
import { IStyles } from "@/app/_models/styles";
import MainContainer from "@/app/_components/common/MainContainer";

interface IProfileMainProps {
  profileMain: IUserData;
  styling?: IStyles;
}

export const ProfileMain: React.FC<IProfileMainProps> = ({
  profileMain,
  styling,
}) => {
  return (
    <MainContainer>
      <Headline headLine={profileMain["profile"]} styling={styling} />
    </MainContainer>
  );
};

export default ProfileMain;
