import { useEffect, useState } from "react"
import Image from "next/image"
import { genericSectionLayout, genericSectionTransition } from "../../../styles/styles"
import SummaryBio from "./AboutMe/SummaryBio"
import ListBlock from "./AboutMe/ListBlock"
import BasicSectionHeader from "../../default/common/BasicSectionHeader"
import { profileImageAboutMe, aboutMeImageSection } from "../../../styles/styles"


export default function AboutMe({ aboutMe }) {

    // const [showCss, useShowCss] = useState(genericSectionTransition())

    // const handleScroll = () => {
    //     useShowCss =`${genericSectionLayout()}`
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     document.getElementById("AboutMeSection").addEventListener("scroll", handleScroll())
    // }, [])

    return (
        <section id="AboutMeSection" className={genericSectionLayout}>
            <BasicSectionHeader
                headerTitle={"About Me"}
            />

            <SummaryBio
                elevator={aboutMe.elevator}
            />
            <div className={`${aboutMeImageSection}`}>
                <Image
                    className={`${profileImageAboutMe}`}
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