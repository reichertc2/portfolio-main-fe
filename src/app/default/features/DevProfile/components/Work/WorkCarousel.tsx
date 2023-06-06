import Image from "next/image"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import projectImage1 from '../../public/stick2.png'
import { baseDarkBorder, baseDarkText } from "../../../../../styles/colors"
import { IProjectInfo } from "@/app/default/models/user"


library.add(faGithub)

interface IWorkCarouselProps {
    projectWorks: IProjectInfo[]
}

export const WorkCarousel: React.FC<IWorkCarouselProps> = ({ projectWorks }) => {

    const projectImages = [projectImage1]
    return (
        <section id="WorkSection" className="py-24 w-4/5 pl-8">
            <h3
                className={`text-xl dark:${baseDarkText} py-1 font-semibold`}>
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
                            <h4 className={`dark:${baseDarkText} italic text-right`}>Featured Project</h4>
                            <h3 className={`text-xl dark:${baseDarkText} py-1 font-semibold text-right`}>{project.title}</h3>
                            <p className={`dark:${baseDarkText} dark:${baseDarkBorder} p-1 rounded-md m-3 text-right`}>{project.description}</p>
                            <ul className="text-right p-3">

                                {
                                    project.toolList.map(tool =>
                                        <li key={tool}
                                            className={`inline-block px-2 dark:${baseDarkText}`}
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
                                            className={`inline-block px-2 dark:${baseDarkText}`}
                                        >
                                            <Link href={url.url}>
                                                <span>
                                                    <FontAwesomeIcon
                                                        className="text-2xl"
                                                        icon={faGithub} />
                                                </span>

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

export default WorkCarousel;