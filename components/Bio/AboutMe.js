import { useEffect, useState } from "react"
import Image from "next/image"
import { baseDarkText,  } from "../../styles/colors"
import { genericSectionLayout, genericSectionTransition } from "../../styles/styles"
import SummaryBio from "./AboutMe/SummaryBio"
import ListBlock from "./AboutMe/ListBlock"
import BasicSectionHeader from "../common/BasicSectionHeader"


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
        <section id="AboutMeSection" className={genericSectionLayout()}>
            <BasicSectionHeader 
                headerTitle={"About Me"}
            />
         
            <SummaryBio 
                elevator={aboutMe.elevator}
            />
            <div className=" w-2/5 px-4 inline-block align-top ">
                <Image
                    className=' rounded-md'
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