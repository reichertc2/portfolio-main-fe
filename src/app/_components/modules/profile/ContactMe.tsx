
import { IContactInfo } from '@/app/_models/user'
import { IStyles } from '@/app/_models/styles';
import ProfileSection from '@/app/_components/common/ProfileSection';
import ContactMeMobileView from './ContactMe/ContactMeMobileView';
import ContactMeStandardView from './ContactMe/ContactMeStandardView';

interface IContactMeProps {
    contactInfo: IContactInfo;
    theme: IStyles;
}

export const ContactMe: React.FC<IContactMeProps> = ({ contactInfo, theme}) => {

    return (
        <ProfileSection
            id={"ContactSection"}
            title={"Contact"}
            theme={theme}
        >

            <ContactMeStandardView
                contactInfo={contactInfo}
            />

            <ContactMeMobileView
                contactInfo={contactInfo}
            />

        </ProfileSection>
    )
}

export default ContactMe;