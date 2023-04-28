import { useEffect, useState } from "react"
import Image from "next/image"
import { baseDarkText,  } from "../../styles/colors"
import SummaryBio from "./AboutMe/SummaryBio"
import ListBlock from "./AboutMe/ListBlock"


export default function AboutMe({ aboutMe }) {

    const [showCss, useShowCss] = useState('py-24 w-4/5 pl-8 transition-opacity')

    const handleScroll = () => {
        useShowCss = 'py-24 w-4/5 pl-8'
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.getElementById("AboutMeSection").addEventListener("scroll", handleScroll())
    }, [])

    return (
        <section id="AboutMeSection" className={showCss}>
            <h3 className={`text-xl dark:${baseDarkText()} py-1 font-semibold`}>
                About Me
            </h3>
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