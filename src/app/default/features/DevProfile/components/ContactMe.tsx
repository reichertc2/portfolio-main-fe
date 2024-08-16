import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BasicSectionHeader from '../../../../_components/common/BasicSectionHeader'
import { IContactInfo } from '@/app/models/user'
import UnderConstruction from '@/app/_components/common/UnderConstruction';

interface IContactMeProps {
    contactInfo: IContactInfo;
}

export const ContactMe: React.FC<IContactMeProps> = ({ contactInfo }) => {

    return (
        <section id="ContactSection" className={`w-full`}>
            <BasicSectionHeader
                headerTitle={"Contact"}
            />
            <div className="hidden sm:block inline-block w-full text-center">

                <h2 className={`text-7xl font-semibold italic dark:text-sky-200 pt-1 pb-3 opacity-70`}>
                    Reach Out
                </h2>
                <p className={`text-sky-100 dark:text-sky-100 p-6 rounded-md m-auto w-2/5`}>
                    {contactInfo["contactBrief"]}
                </p>
                <button
                    className={`dark:text-sky-200 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`}>
                    <a
                        className=''
                        href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>
                </button>
                <ul
                    className={`text-3xl dark:text-sky-200 p-3 content-center`}
                >

                    {
                        contactInfo.socials.map((social, idx) => (
                            <li
                                key={social.id}
                                className="inline-block px-2 w-1/12"
                            >
                                <Link href={social.url}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={social.icon} />
                                    </span>

                                </Link>
                            </li>)
                        )
                    }

                </ul>
            </div>

            <div className={`sm:hidden flex flex-col`}>

                <button
                    className={`dark:text-sky-200 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`}>
                    <a
                        className=''
                        href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>
                </button>

                <ul
                    className={`flex text-3xl dark:text-sky-200 p-3 justify-between content-center`}
                >
                    {
                        contactInfo.socials.map((social, idx) => (
                            <li
                                key={`${social.id}-m`}
                                className="inline-block px-2 w-50"
                            >
                                <Link href={social.url}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={social.icon} />
                                    </span>

                                </Link>
                            </li>)
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default ContactMe