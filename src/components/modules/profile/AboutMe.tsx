import { IAboutMe } from "@/models/user";
import ProfileSection from "@/components/common/ProfileSection";
import { IStyles } from "@/models/styles";
import AboutMeStandardView from "./AboutMe/AboutMeStandardView";
import AboutMeMobileView from "./AboutMe/AboutMeMobileView";


interface IAboutMeProps {
    aboutMe: IAboutMe;
    styling?: IStyles;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ aboutMe, styling }) => {

    return (
        <ProfileSection
            id={"AboutMeSection"}
            title={"About Me"}
            styling={styling}
        >

            <AboutMeStandardView
                aboutMe={aboutMe}
                styling={styling}
            />

            <AboutMeMobileView
                aboutMe={aboutMe}
                styling={styling}
            />

        </ProfileSection>
    )
}

export default AboutMe;