import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { baseDarkText, baseText } from '../../../styles/colors'
import { genericSectionLayout } from '../../../styles/styles'
import BasicSectionHeader from '../../default/common/BasicSectionHeader'


export default function ContactMe({ contactInfo }) {

    return (
        <section id="ContactSection" className={`${genericSectionLayout}`}>
            <BasicSectionHeader
                headerTitle={"Contact"}
            />
            <div className="inline-block w-full text-center">

                <h2 className={`text-7xl font-semibold italic dark:${baseDarkText} pt-1 pb-3 opacity-70`}>
                    Reach Out
                </h2>
                <p className={`${baseText} dark:${baseDarkText} p-6 rounded-md m-auto w-2/5`}>
                    {contactInfo["contactBrief"]}
                </p>
                <button
                    className={`dark:${baseDarkText} p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`}>
                    <a
                        className=''
                        href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>
                </button>
                <ul
                    className={`text-3xl dark:${baseDarkText} p-3 content-center`}
                >

                    {
                        contactInfo.socials.map((social, idx) => (
                            <li
                                key={social.icon}
                                className="inline-block px-2 w-1/12">
                                <Link href={social.url}>
                                    <a >
                                        <FontAwesomeIcon
                                            icon={social.icon} />
                                    </a>

                                </Link>
                            </li>)
                        )
                    }

                </ul>
            </div>
        </section>
    )
}