import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IContactInfo } from '@/models/user'
import { IStyles } from '@/models/styles';

interface IContactMeMobileViewProps {
    contactInfo: IContactInfo;
    styling?: IStyles;
}

export const ContactMeMobileView: React.FC<IContactMeMobileViewProps> = ({ contactInfo, styling }) => {

    const styles = {
        container: `sm:hidden flex flex-col`,
        info: `text-sky-100 dark:text-sky-100 p-6 rounded-md m-auto w-2/5`,
        buttonText: `dark:text-sky-200 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`,
        socialContainer: `flex text-3xl dark:text-sky-200 p-3 justify-between content-center`,
        url: "inline-block px-2 w-50"
    }

    return (

        <div className={styles.container}>

            <button
                className={styles.buttonText}>
                <a
                    className=''
                    href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>
            </button>

            <ul
                className={styles.socialContainer}
            >
                {
                    contactInfo.socials.map((social, idx) => (
                        <li
                            key={`${social.id}-m`}
                            className={styles.url}
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
    )
}

export default ContactMeMobileView;