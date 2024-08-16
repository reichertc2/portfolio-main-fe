"use client";

import { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import { IUserData } from "../_models/user";
import { user } from "../../../data/user";

interface IStyles {
  whiteBg: string;
  standadText: string;
  darkText: string;
  darkStandardText: string;
  accentText: string;
  secondaryAccentText: string;
}

const styles: IStyles = {
  whiteBg: `bg-stone-200`,
  standadText: `text-stone-900`,
  darkText: `text-stone-100`,
  darkStandardText: `text-sky-200`,
  accentText: `text-sky-200`,
  secondaryAccentText: `text-sky-600`,
};

export default function MainClientPage() {
  const [entered, setEntered] = useState<boolean>(false);
  const [profileMain, setProfileMain] = useState<IUserData>(user);

  useEffect(() => {
    setTimeout(() => setEntered(true), 3000);
  }, []);

  return (
    <>
      {entered ? (
        <MainPage user={profileMain} />
      ) : (
        <LandingPage profile={profileMain["profile"]} />
      )}
    </>
  );
}
