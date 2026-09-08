import React from "react";
import { IUserData } from "@/app/_models/user";
import Headline from "./Headline";
import MainContainer from "@/app/_components/common/MainContainer";

interface IProfileMainProps {
  profileMain: IUserData;
}

export const ProfileMain: React.FC<IProfileMainProps> = ({
  profileMain,
}) => {
  return (
    <MainContainer>
      <Headline headLine={profileMain["profile"]}  />
    </MainContainer>
  );
};

export default ProfileMain;
