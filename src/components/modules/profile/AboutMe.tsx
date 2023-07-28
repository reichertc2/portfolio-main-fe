import Image from "next/image"
import ListBlock from "./AboutMe/ListBlock"
import { IAboutMe } from "@/models/user";
import SummaryBio from "./AboutMe/SummaryBio";
import ProfileSection from "@/components/common/ProfileSection";
import { IStyles } from "@/models/styles";


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

            <div className={`w-full`}>
                <div className={`hidden sm:flex justify-start p-1 w-full`}>


                    <SummaryBio
                        elevator={aboutMe.elevator}
                        styles={styling}
                    />

                    <div className={`w-50 px-6`}>

                        <Image
                            className={`inline rounded-md w-9/12`}
                            src={aboutMe.profileImage}
                            alt='profileImage'


                        />
                    </div>
                </div>
                <div className={`hidden sm:flex`}>
                    <ListBlock
                        title="Languages"
                        listProps={aboutMe.languages}
                        orientation={"vertical"}
                        styles={styling}
                    />
                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"horizontal"}
                        styles={styling}
                    />

                </div>
                {/* Mobile */}

                <div className={`sm:hidden flex flex-col justify-start p-1 w-full items-center`}>
                    <div className={`w-11/12`}>

                        <Image
                            className={`rounded-md w-9/12`}
                            src={aboutMe.profileImage}
                            alt='profileImage'


                        />
                    </div>

                    <SummaryBio
                        elevator={aboutMe.elevator}
                        styles={styling}
                    />


                </div>
                <div className={`sm:hidden flex`}>
                    <ListBlock
                        title="Languages"
                        listProps={aboutMe.languages}
                        orientation={"vertical"}
                        styles={styling}
                    />


                </div>
                <div className={`sm:hidden flex`}>

                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"vertical"}
                        styles={styling}
                    />

                </div>
            </div>
        </ProfileSection>
    )
}

export default AboutMe;