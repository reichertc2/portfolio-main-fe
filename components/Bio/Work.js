import Image from "next/image"
import Link from "next/link"
import placeHolderImage from '../../public/placeholder-image.png'

const projectWorks = {
    "projects": [
        {
            "id": "feat-1",
            "title": "Project Title",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit velit sit amet leo pharetra euismod. Nunc eleifend quam nec urna lacinia, sit amet auctor ex finibus. Duis ac lobortis neque, id feugiat ante.",
            "toolList": [
                "tool a",
                "tool a",
                "tool a",
                "tool a",

            ],
            "urlList": [
                {
                    "name": "GitHub",
                    "url": "https://github.com/reichertc2",
                }
                ,

            ],
            "images": [
                "placeHolderImage"
            ]

        }
    ]
}


export default function Work() {
    return (
        <section id="WorkSection" className="py-24 w-4/5 pl-8">
            <h3
                className="text-xl text-sky-300 py-1 font-semibold  ">
                Work
            </h3>
            {
                projectWorks["projects"].map(project =>
                    <div
                        key={project["id"]}
                        className="py-8"
                    >
                        <div className="inline-block">
                            <Image
                                className='px-10 rounded-md align-top'
                                src={placeHolderImage}
                                alt='Placeholder'
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="inline-block w-3/5">
                            <h4 className="text-sky-400 italic text-right">Featured Project</h4>
                            <h3 className="text-xl text-sky-300 py-1 font-semibold text-right ">{project.title}</h3>
                            <p className="bg-stone-900 text-sky-300 p-1 rounded-md m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit velit sit amet leo pharetra euismod. Nunc eleifend quam nec urna lacinia, sit amet auctor ex finibus. Duis ac lobortis neque, id feugiat ante. Quisque gravida risus et magna vulputate sollicitudin. </p>
                            <ul className="text-right p-3">
                                {
                                    project.toolList.map(tool =>
                                        <li key={tool}
                                            className="inline-block px-2 text-sky-200"
                                        >
                                            {tool}
                                        </li>

                                    )
                                }

                            </ul>
                            <ul>
                                {
                                    project.urlList.map(url =>
                                        <li
                                            key={url.name}
                                            className="inline-block px-2 text-sky-200"
                                        >
                                            <Link href={url.url}>
                                                <a>{url.name}</a>
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