import Image from "next/image"
import { IAboutMe } from "@/models/user";
import { IStyles } from "@/models/styles";
import ListBlock from "./ListBlock";
import SummaryBio from "./Standard/SummaryBio";


interface IAboutMeStandardViewProps {
    aboutMe: IAboutMe;
    styling?: IStyles;
}

export const AboutMeStandardView: React.FC<IAboutMeStandardViewProps> = ({ aboutMe, styling }) => {
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
                styling={styling}
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
                        styles={styling}
                    />
                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"vertical"}
                        styles={styling}
                    />

                </div>
            </div>
        </div>

    )
}

export default AboutMeStandardView;