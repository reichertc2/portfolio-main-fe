import React from "react";
import { IUserData } from "@/app/_models/user";
import Headline from "./Headline";
import { IStyles } from "@/app/_models/styles";
import MainContainer from "@/app/_components/common/MainContainer";

interface IProfileMainProps {
  profileMain: IUserData;
  theme: IStyles;
}

export const ProfileMain: React.FC<IProfileMainProps> = ({
  profileMain,
  theme,
}) => {
  return (
    <MainContainer>
      <Headline headLine={profileMain["profile"]} theme={theme} />
    </MainContainer>
  );
};

export default ProfileMain;
