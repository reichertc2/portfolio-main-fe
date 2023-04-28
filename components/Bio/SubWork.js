import Image from "next/image"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import projectImage1 from '../../public/speed.png'
import projectImage2 from '../../public/books.png'
import projectImage3 from '../../public/coders-pursuit-ss.png'
import projectImage4 from '../../public/coders-pursuit-ss.png'

import { baseDarkText } from "../../styles/colors"

library.add(faGithub)


export default function SubWork({ projectWorks }) {

    const projectImages = [projectImage1, projectImage2, projectImage3, projectImage4]
    return (
        <section id="WorkSection" className="py-24 w-4/5 pl-8">
            <h3
                className={`text-xl dark:${baseDarkText()} py-1 font-semibold`}>
                Other Projects
            </h3>
            <div className="inline-grid grid-cols-3 gap-3">

                {
                    projectWorks.map((project, idx) =>
                        <div
                            key={project["id"]}
                            className="py-8 col-span-1"
                        >
                            <div className="inline-block w-full relative ">

                                <Image
                                    className='opacity-40 rounded-md '
                                    src={projectImages[idx]}
                                    alt='Placeholder'
                                    width={300}
                                    height={300}
                                />



                                <div className="absolute -left-0 -bottom-0 opacity-0 hover:opacity-90 pb-4 pl-1">
                                    <h3 className={`text-xl dark:${baseDarkText()} py-1 font-semibold`}>{project.title}</h3>
                                    <p className={`text-md dark:${baseDarkText()} py-1 font-semibold`}>{project.description}</p>

                                    <ul className="">

                                        {
                                            project.urlList.map(url =>
                                                <li
                                                    key={url.name}
                                                    className={`inline-block px-2 dark:${baseDarkText()}`}
                                                >
                                                    <Link href={url.url}>
                                                        <a >
                                                            <FontAwesomeIcon
                                                                className="text-2xl"
                                                                icon={faGithub} />
                                                        </a>

                                                    </Link>

                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

