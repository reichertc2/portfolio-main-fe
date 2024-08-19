import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContactInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface IContactMeStandardViewProps {
  contactInfo: IContactInfo;
  styling?: IStyles;
}

export const ContactMeStandardView: React.FC<IContactMeStandardViewProps> = ({
  contactInfo,
  styling,
}) => {
  const styles = {
    container: "hidden sm:block inline-block w-full text-center",
    header: `text-7xl font-semibold italic dark:text-sky-200 pt-1 pb-3 opacity-70`,
    info: `text-sky-100 dark:text-sky-100 p-6 rounded-md m-auto w-2/5`,
    buttonText: `dark:text-sky-200 p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md opacity-70 hover:opacity-100`,
    socialContainer: `text-3xl dark:text-sky-200 p-3 content-center`,
    url: "inline-block px-2 w-1/12",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reach Out</h2>
      <p className={styles.info}>{contactInfo["contactBrief"]}</p>
      <button className={styles.buttonText}>
        <a className="" href={`mailto: ${contactInfo["email"]}`}>
          Ping Me
        </a>
      </button>
      <ul className={styles.socialContainer}>
        {contactInfo.socials.map((social, idx) => (
          <li key={social.id} className={styles.url}>
            <Link href={social.url}>
              <span>
                <FontAwesomeIcon icon={social.icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactMeStandardView;
