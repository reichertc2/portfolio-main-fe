import React from "react";
import { IContactInfo } from "@/app/_models/user";
import ProfileSection from "@/app/_components/common/ProfileSection";
import ContactMeMobileView from "./ContactMe/ContactMeMobileView";
import ContactMeStandardView from "./ContactMe/ContactMeStandardView";

interface IContactMeProps {
  contactInfo: IContactInfo;
}

export const ContactMe: React.FC<IContactMeProps> = ({
  contactInfo,
}) => {
  return (
    <ProfileSection id={"ContactSection"} title={"Contact"} >
      <ContactMeStandardView contactInfo={contactInfo} />

      <ContactMeMobileView contactInfo={contactInfo} />
    </ProfileSection>
  );
};

export default ContactMe;
