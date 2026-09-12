import React from "react";
import {IContactInfo} from "@/app/_models/user";
import ContentContainer from "@/app/_components/common/ContentContainer";
import ContactMeMobileView from "./ContactMe/ContactMeMobileView";
import ContactMeStandardView from "./ContactMe/ContactMeStandardView";

interface IContactMeProps {
    contactInfo: IContactInfo;
}

export const ContactMe: React.FC<IContactMeProps> = ({
                                                         contactInfo,
                                                     }) => {
    return (
        <ContentContainer id={"ContactSection"} title={"Contact"}>
            <ContactMeStandardView contactInfo={contactInfo}/>

            <ContactMeMobileView contactInfo={contactInfo}/>
        </ContentContainer>
    );
};

export default ContactMe;
