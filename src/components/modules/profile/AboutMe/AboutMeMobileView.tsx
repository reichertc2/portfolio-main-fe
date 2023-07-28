import Image from "next/image"
import { IAboutMe } from "@/models/user";
import { IStyles } from "@/models/styles";
import ListBlock from "./ListBlock";
import { SummaryBioMobile } from "./Mobile/SummaryBioMobile";


interface IAboutMeMobileViewProps {
    aboutMe: IAboutMe;
    styling?: IStyles;
}

export const AboutMeMobileView: React.FC<IAboutMeMobileViewProps> = ({ aboutMe, styling }) => {

    const styles = {
        bioContainer: `sm:hidden flex flex-col justify-start p-1 w-full items-center`,
        bioImageContainer: `w-11/12`,
        bioImage: `rounded-md w-9/12`,
        skillsContainer: `sm:hidden flex`
    }

    return (
        <>
            {/* Mobile */}

            <div className={styles.bioContainer}>
                <div className={styles.bioImageContainer}>

                    <Image
                        className={styles.bioImage}
                        src={aboutMe.profileImage}
                        alt='profileImage'


                    />
                </div>

                <SummaryBioMobile
                    elevator={aboutMe.elevator}
                    styling={styling}
                />


            </div>
            <div className={styles.skillsContainer}>
                <ListBlock
                    title="Languages"
                    listProps={aboutMe.languages}
                    orientation={"vertical"}
                    styles={styling}
                />


            </div>
            <div className={styles.skillsContainer}>

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