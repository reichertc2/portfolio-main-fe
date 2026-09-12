import React from "react";
import {IUserData} from "@/app/_models/user";
import ThreeQuarterView from "./SubViews/ThreeQuarterView";
import CopyrightText from "./Footer/CopyrightText";
import SocialMediaIcons from "./Footer/SocialMediaIcons";

interface IFooterProps {
    profileMain: IUserData;
}

export const Footer: React.FC<IFooterProps> = ({profileMain}) => {
    const styles = {
        footer: `text-center content-center`,
        copyright: `text-text dark:text-text-dark italic pt-4`,
    };

    return (
        <footer className={styles.footer}>
            <ThreeQuarterView divider={true}>
                <CopyrightText text={profileMain.profile.name}/>
                <SocialMediaIcons socialMedia={profileMain.contactInfo.socials}/>
            </ThreeQuarterView>
        </footer>
    );
};

export default Footer;
