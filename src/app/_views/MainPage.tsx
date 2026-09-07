"use client";

import Footer from "../_components/ui/Footer";
import Header from "../_components/ui/Header";
import { IUserData } from "../_models/user";
import Main from "../_components/common/Main";
import { IStyles } from "../_models/styles";
import React from "react";

interface IMainPageProps {
  user: IUserData;
}

export const MainPage: React.FC<IMainPageProps> = ({ user }) => {
  return (
    <div className="m-auto min-h-screen">
      <Header profileMain={user}  />
      <Main profileMain={user}  />
      <Footer profileMain={user}  />
    </div>
  );
};

export default MainPage;
