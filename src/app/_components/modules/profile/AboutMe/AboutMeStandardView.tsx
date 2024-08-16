import Image from "next/image"
import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ListBlock from "./ListBlock";
import SummaryBio from "./Standard/SummaryBio";


interface IAboutMeStandardViewProps {
    aboutMe: IAboutMe;
    theme: IStyles;
}

export const AboutMeStandardView: React.FC<IAboutMeStandardViewProps> = ({ aboutMe, theme }) => {
    const styles = {
        bioContainer: `hidden sm:flex justify-start p-2 w-full`,
        bioImageContainer: "mx-2",
        bioImage: `inline rounded-md w-9/12`,
        skillsContainer: `hidden sm:flex pt-8`
    }

    return (

        <div className={styles.bioContainer}>


            <SummaryBio
                elevator={aboutMe.elevator}
                theme={theme}
            />

            <div className={styles.bioImageContainer}>

                <Image
                    className={styles.bioImage}
                    src={aboutMe.profileImage}
                    alt='profileImage'


                />
                <div className={styles.skillsContainer}>
                    <ListBlock
                        title="Languages"
                        listProps={aboutMe.languages}
                        orientation={"vertical"}
                        theme={theme}
                    />
                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"vertical"}
                        theme={theme}
                    />

                </div>
            </div>
        </div>

    )
}

export default AboutMeStandardView;