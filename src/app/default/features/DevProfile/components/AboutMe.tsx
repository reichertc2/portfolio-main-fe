"use client";

import { useEffect, useState } from "react"
import Image from "next/image"
import SummaryBio from "./AboutMe/SummaryBio"
import ListBlock from "./AboutMe/ListBlock"
import BasicSectionHeader from "../../../common/components/BasicSectionHeader"
import { IAboutMe } from "@/app/default/models/user";


interface IAboutMeProps {
    aboutMe: IAboutMe;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ aboutMe }) => {

    // const [showCss, useShowCss] = useState(genericSectionTransition())

    // const handleScroll = () => {
    //     useShowCss =`${genericSectionLayout()}`
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     document.getElementById("AboutMeSection").addEventListener("scroll", handleScroll())
    // }, [])

    return (
        <section id="AboutMeSection" className={`flex justify-start p-1 w-full`}>
            <BasicSectionHeader
                headerTitle={"About Me"}
            />

            <SummaryBio
                elevator={aboutMe.elevator}
            />
            <div className={`w-2/5 px-4 inline-block align-top`}>
                <Image
                    className={`rounded-md`}
                    src={aboutMe.profileImage}
                    alt='profileImage'
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <ListBlock
                    title="Languages"
                    listProps={aboutMe.languages}
                    orientation={"vertical"}
                />
                <ListBlock
                    title="Tools"
                    listProps={aboutMe.tools}
                    orientation={"horizontal"}
                />

            </div>
        </section>
    )
}

export default AboutMe;