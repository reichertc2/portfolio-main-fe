import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IContactInfo} from "@/app/_models/user";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

interface ICallToActionSocialsProps {
    contactInfo: IContactInfo;
}

export const CallToActionSocials: React.FC<ICallToActionSocialsProps> = ({
                                                                             contactInfo,
                                                                         }) => {
    const styles = {
        container: "w-full",
        replyStatement: `pb-6 pl-2`,
        socialList: `text-lg text-left text-text dark:text-text-dark p-3`,
        url: "p-2",
        name: `inline-block pl-4`
    };

    return (
        <div className={styles.container}>
            <ul className={styles.socialList}>
                <li className={styles.replyStatement}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    <p className={styles.name}>Replies in 24h</p>
                </li>
                {contactInfo.socials.map((social, idx) => (
                    <li key={social.id} className={styles.url}>
                        <Link href={social.url}>
                            <span>
                                <FontAwesomeIcon icon={social.icon}/>
                            </span>
                            <p className={styles.name}> - {social.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CallToActionSocials;
