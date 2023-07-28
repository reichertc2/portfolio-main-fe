import Image from "next/image"
import { IAboutMe } from "@/models/user";
import { IStyles } from "@/models/styles";
import ListBlock from "./ListBlock";
import SummaryBio from "./SummaryBio";


interface IAboutMeStandardViewProps {
    aboutMe: IAboutMe;
    styling?: IStyles;
}

export const AboutMeStandardView: React.FC<IAboutMeStandardViewProps> = ({ aboutMe, styling }) => {

    return (
        <>

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
        </>
    )
}

export default AboutMeStandardView;