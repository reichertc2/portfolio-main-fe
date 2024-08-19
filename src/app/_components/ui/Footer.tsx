import React from "react";
import { IStyles } from "@/app/_models/styles";
import { IUserData } from "@/app/_models/user";
import ThreeQuarterView from "./SubViews/ThreeQuarterView";
import CopyrightText from "./Footer/CopyrightText";
import SocialMediaIcons from "./Footer/SocialMediaIcons";

interface IFooterProps {
  profileMain: IUserData;
  theme: IStyles;
}

export const Footer: React.FC<IFooterProps> = ({ profileMain, theme }) => {
  const styles = {
    footer: `p-3 text-center content-center`,
    copyright: `dark:${theme.texts.dark} italic py-4`,
  };

  return (
    <footer className={styles.footer}>
      <ThreeQuarterView divider={true}>
        <CopyrightText text={profileMain.profile.name} />
        <SocialMediaIcons socialMedia={profileMain.contactInfo.socials} />
      </ThreeQuarterView>
    </footer>
  );
};

export default Footer;
