import Image from "next/image"
import Link from "next/link"
// import placeHolderImage from '../../public/placeholder-image.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import projectImage1 from '../../public/stick2.png'


library.add(faGithub)


export default function SubWork({ projectWorks }) {

    const projectImages = [projectImage1, projectImage1, projectImage1]
    return (
        <section id="WorkSection" className="py-24 w-4/5 pl-8">
            <h3
                className="text-xl darK:text-sky-300 py-1 font-semibold  ">
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
                                    className='opacity-20 rounded-md hover:opacity-80'
                                    src={projectImages[idx]}
                                    alt='Placeholder'
                                    width={300}
                                    height={300}
                                />



                                <div className="absolute -left-0 -bottom-0 opacity-0 hover:opacity-90 pb-4 pl-1">
                                    <h3 className="text-xl dark:text-sky-300 py-1 font-semibold ">{project.title}</h3>

                                    <ul className="">

                                        {
                                            project.urlList.map(url =>
                                                <li
                                                    key={url.name}
                                                    className="inline-block px-2 dark:text-sky-200"
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

