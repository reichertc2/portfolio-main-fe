
import { IContactInfo } from '@/models/user'
import { IStyles } from '@/models/styles';
import ProfileSection from '@/components/common/ProfileSection';
import ContactMeMobileView from './ContactMe/ContactMeMobileView';
import ContactMeStandardView from './ContactMe/ContactMeStandardView';

interface IContactMeProps {
    contactInfo: IContactInfo;
    styling?: IStyles;
}

export const ContactMe: React.FC<IContactMeProps> = ({ contactInfo, styling }) => {

    return (
        <ProfileSection
            id={"ContactSection"}
            title={"Contact"}
            styling={styling}
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