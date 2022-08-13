import Image from "next/image"
import placeHolderImage from '../../public/placeholder-image.png'

const aboutMe = {
    "aboutMe":
    {
        "elevator": [
            "Hello. My name is Chris and i enjoy creating and automating processes through the power of code. My ineterest began while I was in high school where I wrote my first HTML code.",
            "I stepped away from software to pursue a military career in aviation as an officer and pilot of the AH-64D attack helicopter.",
            "I then pursued a career in construction as a project manager earning my Project Management Professional (PMP).",
            "I finally revisited programming and fell in love. I attended a coding training program at CodFellows, which I highly recommend."
        ],
        "languages": [
            "Python",
            "Javascript",
            "Apex"
        ],
        "tools": [
            "Django",
            "Flask",
            "React",
            "Next.js",
            "Node.js",

        ]
    }

}

export default function AboutMe() {
    return (
        <section id="AboutMeSection" className="py-24 w-4/5 pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                About Me
            </h3>
            <div className="inline-block w-3/5">

                {
                    aboutMe["aboutMe"]["elevator"].map((text, idx) =>
                        <p key={idx}
                            className="text-sky-200 py-2"
                        >
                            {text}
                        </p>
                    )
                }



                <ul className="text-sky-200 inline-block pr-3 align-top text-sm">
                    <li className="text-semibold pb-1">Languages: </li>
                    {
                        aboutMe["aboutMe"]["languages"].map((lang, idx) =>
                            <li
                                key={idx}
                                className="pl-3 list-disc list-inside">{lang}</li>
                        )
                    }

                </ul>

                <ul className="text-sky-200 inline-block inline-grid grid-cols-5 gap-0 text-sm">
                    <li className="text-semibold col-span-full">Tools: </li>
                    {
                        aboutMe["aboutMe"]["tools"].map((tool, idx) =>
                            <li
                                key={idx}
                                className="pl-3 list-disc list-inside text-sm">{tool}</li>
                        )
                    }



                </ul>

            </div>
            <div className="pl-16 inline-block align-top ">
                <Image
                    className='px-10 rounded-md'

                    src={placeHolderImage}
                    alt='Placeholder'
                    width={250}
                    height={250}
                />
            </div>

        </section>
    )
}