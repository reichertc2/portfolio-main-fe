"use client";

import Footer from "../_components/ui/Footer";
import Header from "../_components/ui/Header";
import { IUserData } from "../_models/user";
import Main from "../_components/common/Main";
import { IStyles } from "../_models/styles";

interface IMainPageProps {
  user: IUserData;
  theme: IStyles;
}

export const MainPage: React.FC<IMainPageProps> = ({ user, theme }) => {
  return (
    <div className="m-auto min-h-screen">
      <Header profileMain={user} theme={theme} />
      <Main profileMain={user} theme={theme}/>
      <Footer profileMain={user} theme={theme} />
    </div>
  );
};

export default MainPage;
