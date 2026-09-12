import {user} from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import ContactMe from "@/app/_features/profile/ContactMe";
import React from "react";

interface IContactMePageProps {
}

const ContactMePage: React.FC<IContactMePageProps> = () => {
    return (
        <MainContainer>
            <ContactMe contactInfo={user.contactInfo}/>
        </MainContainer>
    );
};

export default ContactMePage;
