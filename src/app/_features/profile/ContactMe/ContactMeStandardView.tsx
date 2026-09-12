import React from "react";
import {IContactInfo} from "@/app/_models/user";
import CallToActionContainer from "@/app/_features/profile/ContactMe/Standard/CallToActionContainer";
import ContactForm from "@/app/_features/profile/ContactMe/Standard/ContactForm";

interface IContactMeStandardViewProps {
    contactInfo: IContactInfo;
}

export const ContactMeStandardView: React.FC<IContactMeStandardViewProps> = ({
                                                                                 contactInfo,
                                                                             }) => {
    const styles = {
        container: "flex w-full text-center border-secondary border-1 rounded-md",
    };

    return (
        <div className={styles.container}>
            <CallToActionContainer contactInfo={contactInfo}/>
            <ContactForm/>
        </div>
    );
};

export default ContactMeStandardView;
