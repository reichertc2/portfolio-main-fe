import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSalesforce } from "@fortawesome/free-brands-svg-icons"

library.add(faGithub, faLinkedin, faSalesforce)


export default function ContactMe({ contactInfo }) {
    return (
        <section id="ContactSection" className="py-24 w-full pl-8">
            <h3 className="text-xl dark:text-sky-300 py-1 font-semibold  ">
                Contact
            </h3>
            <div className="inline-block w-full text-center">

                <h2 className="text-7xl font-semibold italic dark:text-sky-200 pt-1 pb-3 opacity-70">
                    Reach Out
                </h2>
                <p className="text-stone-900 dark:text-sky-200 p-6 rounded-md m-auto w-2/5 ">
                    {contactInfo["contactBrief"]}
                </p>
                <button
                    className="dark:text-sky-200 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100">
                    <a
                        className=''
                        href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>


                </button>
                <ul
                    className="text-3xl dark:text-sky-300 p-3 content-center"
                >
                    <li
                        className="inline-block px-2 w-1/12">
                        <Link href={contactInfo.socials[0]}>
                            <a >
                                <FontAwesomeIcon

                                    icon={faGithub} />
                            </a>

                        </Link>
                    </li>
                    <li
                        className="inline-block px-2 w-1/12">
                        <Link href={contactInfo.socials[1]}>
                            <a >
                                <FontAwesomeIcon

                                    icon={faLinkedin} />
                            </a>

                        </Link>
                    </li>
                    <li
                        className="inline-block px-2 w-1/12">
                        <Link href={contactInfo.socials[2]}>
                            <a >
                                <FontAwesomeIcon

                                    icon={faSalesforce} />
                            </a>

                        </Link>
                    </li>
                </ul>
            </div>


        </section>
    )
}