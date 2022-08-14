import Image from "next/image"
import placeHolderImage from '../../public/placeholder-image.png'


export default function AboutMe({ aboutMe }) {
    
    return (
        <section id="AboutMeSection" className="py-24 w-4/5 pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                About Me
            </h3>
            <div className="inline-block w-3/5">

                {
                    aboutMe["elevator"].map((text, idx) =>
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
                        aboutMe["languages"].map((lang, idx) =>
                            <li
                                key={idx}
                                className="pl-3 list-disc list-inside">{lang}</li>
                        )
                    }

                </ul>
                <ul className="text-sky-200 inline-block inline-grid grid-cols-5 gap-0 text-sm">
                    <li className="text-semibold col-span-full">Tools: </li>

                    {
                        aboutMe["tools"].map((tool, idx) =>
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