import { useEffect, useState } from "react"
import Image from "next/image"
import profileImage from '../../public/profile.jpeg'
import { baseDarkText,  } from "../../styles/colors"

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
            <div className="inline-block w-3/5">

                {
                    aboutMe["elevator"].map((text, idx) =>
                        <p key={idx}
                            className={`dark:${baseDarkText()} py-2`}
                        >
                            {text}
                        </p>
                    )
                }

            </div>
            <div className=" w-2/5 px-4 inline-block align-top ">
                <Image
                    className=' rounded-md'
                    src={profileImage}
                    alt='profileImage'
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <ul className={`dark:${baseDarkText()} inline-block pr-3 align-top text-sm w-1/5`}>
                    <li className="text-semibold pb-1">Languages: </li>

                    {
                        aboutMe["languages"].map((lang, idx) =>
                            <li
                                key={idx}
                                className="img-li pl-5 list-inside"
                            >
                                {lang}
                            </li>
                        )
                    }

                </ul>
                <ul className={`dark:${baseDarkText()} inline-block inline-grid grid-cols-5 gap-2 text-sm pl-5 w-4/5`}>
                    <li className="text-semibold col-span-full">Tools: </li>

                    {
                        aboutMe["tools"].map((tool, idx) =>
                            <li
                                key={idx}
                                className="img-li pl-5 list-inside text-sm"
                            >
                                {tool}
                            </li>
                        )
                    }

                </ul>
            </div>
        </section>
    )
}