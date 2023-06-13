import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { baseDarkText, baseText } from '../../../../styles/colors'
import { genericSectionLayout } from '../../../../styles/styles'
import BasicSectionHeader from '../../../common/components/BasicSectionHeader'
import { IContactInfo } from '@/app/default/models/user'

interface IContactMeProps {
    contactInfo: IContactInfo;
}

export const ContactMe: React.FC<IContactMeProps>= ({ contactInfo })=> {

    return (
        <section id="ContactSection" className={`py-24 w-full pl-8`}>
            <BasicSectionHeader
                headerTitle={"Contact"}
            />
            <div className="inline-block w-full text-center">

                <h2 className={`text-7xl font-semibold italic dark:text-stone-900 pt-1 pb-3 opacity-70`}>
                    Reach Out
                </h2>
                <p className={`text-sky-100 dark:text-stone-900 p-6 rounded-md m-auto w-2/5`}>
                    {contactInfo["contactBrief"]}
                </p>
                <button
                    className={`dark:text-stone-900 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`}>
                    <a
                        className=''
                        href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>
                </button>
                <ul
                    className={`text-3xl dark:text-stone-900 p-3 content-center`}
                >

                    {
                        contactInfo.socials.map((social, idx) => (
                            <li
                                key={social.icon}
                                className="inline-block px-2 w-1/12">
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