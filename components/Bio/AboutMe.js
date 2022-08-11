import Image from "next/image"
import placeHolderImage from '../../public/placeholder-image.png'

export default function AboutMe() {
    return (
        <section id="AboutMeSection" className="py-24 w-4/5 pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                About Me
            </h3>
            <div className="inline-block w-3/5">
                <p className="text-sky-200 py-2">
                    Hello. My name is Chris and i enjoy creating and automating processes through the power of code. My ineterest began while I was in high school where I wrote my first HTML code.
                </p>
                <p className="text-sky-200 py-2">
                    I stepped away from software to pursue a military career in aviation as an officer and pilot of the AH-64D attack helicopter.
                </p>
                <p className="text-sky-200 py-2">
                    I then pursued a career in construction as a project manager earning my Project Management Professional (PMP).
                </p>
                <p className="text-sky-200 py-2">
                    I finally revisited programming and fell in love. I attended a coding training program at CodFellows, which I highly recommend.
                </p>
                <p className="text-sky-200 py-4">
                    Here are a few tools and languages I am familiar:
                </p>

                <ul className="text-sky-200 inline-block  pr-3 align-top">
                    <li className="text-semibold">Languages: </li>
                    <li className="pl-3">~ Python</li>
                    <li className="pl-3">~ JavaScript</li>
                </ul>

                <ul className="text-sky-200 inline-block px-5 align-top">
                    <li className="text-semibold">Tools: </li>
                    <li className="pl-3">~ Django</li>
                    <li className="pl-3">~ Flask</li>
                    <li className="pl-3">~ React</li>


                </ul>
                <ul className="text-sky-200 inline-block align-top">
                    <li className="text-semibold opacity-0">Blank</li>

                    <li className="pl-3">~ Next.js</li>
                    <li className="pl-3">~ Node.js</li>

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