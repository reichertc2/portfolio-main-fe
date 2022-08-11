import Image from "next/image"
import placeHolderImage from '../../public/placeholder-image.png'

export default function AboutMe() {
    return (
        <section className="py-24 w-4/5 ">
            <h3 className="text-lg text-sky-300 py-1 font-semibold  ">
                About Me
            </h3>

            <p className="text-sky-200 py-2">
                Hello. My name is Chris and i enjoy creating and automating processes through the power of code. My ineterest began while I was in high school where I wrote my first HTML code.
            </p>
            <p className="text-sky-200 py-2">
                I did step away from software to pursue a military career as an avaition officer and company commander. Were I trained in leadership and the AH-64D attack helicopter.
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

            <ul className="text-sky-200 inline-block px-3 align-top">
                <li className="text-semibold">Languages: </li>
                <li className="pl-3">Python</li>
                <li className="pl-3">JavaScript</li>
            </ul>

            <ul className="text-sky-200 inline-block px-3 align-top">
                <li className="text-semibold">Tools: </li>
                <li className="pl-3">Django</li>
                <li className="pl-3">Flask</li>
                <li className="pl-3">React</li>


            </ul>
            <ul className="text-sky-200 inline-block px-3 align-top">
                <li className="text-semibold opacity-0">Blank</li>
                
                <li className="pl-3">Next.js</li>
                <li className="pl-3">Node.js</li>

            </ul>
            <Image
                className=''

                src={placeHolderImage}
                alt='Placeholder'
                width={250}
                height={250}
            />

        </section>
    )
}