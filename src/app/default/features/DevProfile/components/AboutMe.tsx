"use client";

import Image from "next/image"
import SummaryBio from "./AboutMe/SummaryBio"
import ListBlock from "./AboutMe/ListBlock"
import BasicSectionHeader from "../../../../_components/common/BasicSectionHeader"
import { IAboutMe } from "@/app/models/user";
import { IStyles } from "@/app/default/common/MainClientPage";


interface IAboutMeProps {
    aboutMe: IAboutMe;
    styles?: IStyles;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ aboutMe, styles }) => {

    return (
        <section id="AboutMeSection" className={`flex flex-col`}>
            <BasicSectionHeader
                headerTitle={"About Me"}
                styles={styles}
            />
            <div className={`w-full`}>
                <div className={`hidden sm:flex justify-start p-1 w-full`}>


                    <SummaryBio
                        elevator={aboutMe.elevator}
                        styles={styles}
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
                        styles={styles}
                    />
                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"horizontal"}
                        styles={styles}
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
                        styles={styles}
                    />


                </div>
                <div className={`sm:hidden flex`}>
                    <ListBlock
                        title="Languages"
                        listProps={aboutMe.languages}
                        orientation={"vertical"}
                        styles={styles}
                    />


                </div>
                <div className={`sm:hidden flex`}>

                    <ListBlock
                        title="Tools"
                        listProps={aboutMe.tools}
                        orientation={"vertical"}
                        styles={styles}
                    />

                </div>
            </div>
        </section>
    )
}

export default AboutMe;