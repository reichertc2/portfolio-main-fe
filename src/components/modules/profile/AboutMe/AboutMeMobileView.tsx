import Image from "next/image"
import { IAboutMe } from "@/models/user";
import { IStyles } from "@/models/styles";
import ListBlock from "./ListBlock";
import SummaryBio from "./SummaryBio";


interface IAboutMeMobileViewProps {
    aboutMe: IAboutMe;
    styling?: IStyles;
}

export const AboutMeMobileView: React.FC<IAboutMeMobileViewProps> = ({ aboutMe, styling }) => {

    return (
        <>
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
        </>
    )
}

export default AboutMeMobileView;