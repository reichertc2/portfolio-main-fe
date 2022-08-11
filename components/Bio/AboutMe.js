import Image from "next/image"
import placeHolderImage from '../../public/placeholder-image.png'

export default function AboutMe() {
    return (
        <section className="py-6">
            <h3>About Me</h3>

            <p>
                Hello. My name is Chris and i enjoy creating and automating processes through the power of code. My ineterest began while I was in high school where I wrote my first HTML code.
            </p>
            <p>
                I did step away from software to pursue a military career as an avaition officer and company commander. Were I trained in leadership and the AH-64D attack helicopter.
            </p>
            <p>
                I then pursued a career in construction as a project manager earning my Project Management Professional (PMP).
            </p>
            <p>
                I finally revisited programming and fell in love. I attended a coding training program at CodFellows, which I highly recommend.
            </p>
            <p>
                Here are a few technologies and languages I am familiar:

            </p>

            <ul>
                <li>Python</li>
                <li>JavaScript</li>


            </ul>
            <ul>
                <li>Django</li>
                <li>Flask</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>

            </ul>
            <Image
                className='rounded-full'

                src={placeHolderImage}
                alt='Placeholder'
                width={100}
                height={100}
            />

        </section>
    )
}