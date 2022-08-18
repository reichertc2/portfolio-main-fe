import Image from "next/image"
import Link from "next/link"
// import placeHolderImage from '../../public/placeholder-image.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import projectImage1 from '../../public/stick2.png'


library.add(faGithub)


export default function Work({ projectWorks }) {

    const projectImages= [projectImage1]
    return (
        <section id="WorkSection" className="py-24 w-4/5 pl-8">
            <h3
                className="text-xl darK:text-sky-300 py-1 font-semibold  ">
                Work
            </h3>

            {
                projectWorks.map((project, idx) =>
                    <div
                        key={project["id"]}
                        className="py-8"
                    >
                        <div className="inline-block w-2/5">

                            <Image
                                className='px-10 rounded-md align-top opacity-40 hover:opacity-90'
                                src={projectImages[idx]}
                                alt='Placeholder'
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="inline-block w-3/5 align-top">
                            <h4 className="dark:text-sky-400 italic text-right">Featured Project</h4>
                            <h3 className="text-xl dark:text-sky-300 py-1 font-semibold text-right ">{project.title}</h3>
                            <p className="dark:text-sky-300 dark:text-stone-300 p-1 rounded-md m-3 text-right">{project.description}</p>
                            <ul className="text-right p-3">

                                {
                                    project.toolList.map(tool =>
                                        <li key={tool}
                                            className="inline-block px-2 dark:text-sky-200"
                                        >
                                            {tool}
                                        </li>

                                    )
                                }

                            </ul>
                            <ul className="pl-64">

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
                )
            }

        </section>
    )
}

