"use client";

import React from "react";
import { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import { IUserData } from "@/app/_models/user";
import Header from "./Header";
import Footer from "./Footer";
import { user } from "../../../../data/user";
import { theme } from "../../../../data/theme";

interface IMainClientViewProps {
  children?: React.ReactNode;
}

export const MainClientView: React.FC<IMainClientViewProps> = ({
  children,
}) => {
  const [entered, setEntered] = useState<boolean>(false);
  const [profileMain, setProfileMain] = useState<IUserData>(user);

  const styles = {
    container: `m-auto min-h-screen ${theme.backgrounds.light} dark:${theme.backgrounds.dark} ${theme.texts.light}`,
  };

  useEffect(() => {
    setTimeout(() => setEntered(true), 10);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {entered ? (
          <>
            <Header profileMain={user} theme={theme} />
            <div>{children}</div>
            <Footer profileMain={user} theme={theme} />
          </>
        ) : (
          <LandingPage profile={profileMain["profile"]} theme={theme} />
        )}
      </div>
    </>
  );
};

export default MainClientView;
