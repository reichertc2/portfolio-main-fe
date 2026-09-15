import React from "react";
import Image from "next/image";
import {IAboutMe} from "@/app/_models/user";
import SummaryBio from "./Standard/SummaryBio";
import Skills from "./Standard/Skills";
import ButtonGeneric from "@/app/_components/common/buttons/ButtonGeneric";

interface IAboutMeStandardViewProps {
    aboutMe: IAboutMe;
}

export const AboutMeStandardView: React.FC<IAboutMeStandardViewProps> = ({
                                                                             aboutMe,
                                                                         }) => {
    const styles = {
        bioContainer: `hidden sm:flex justify-start w-full`,
        summaryContainer: `w-full`,
        innerContainer: `flex items-center flex-col justify-center w-full`,
        skillsContainer: `w-full pb-1`,
        buttonContainer: `flex items-center justify-left w-full`,
        imageContainer: `p-2 w-2/3 m-0`,
        bioImage: `rounded-md `,
    };

    return (
        <div className={styles.bioContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.bioImage}
                        src={aboutMe.profileImage}
                        alt="profileImage"
                    />
                </div>
                <div className={styles.skillsContainer}>
                    <Skills title={"Languages"} skills={aboutMe.languages}/>
                    <Skills title={"Tools"} skills={aboutMe.tools}/>
                </div>
                <div className={styles.buttonContainer}>
                    <ButtonGeneric
                        text={"Download Resume"}
                        url={"/Resume.pdf"}
                        isPrimary={true}
                        download={`Resume.pdf`}
                    />

                    <ButtonGeneric
                        text={"Contact"}
                        url={"/Contact"}
                        isPrimary={false}
                        download={false}
                    />
                </div>
            </div>
            <div className={styles.summaryContainer}>
                <SummaryBio elevator={aboutMe.elevator}/>

            </div>

        </div>
    );
};

export default AboutMeStandardView;
