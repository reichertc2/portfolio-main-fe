
import { IContactInfo } from '@/app/_models/user'
import { IStyles } from '@/app/_models/styles';
import ProfileSection from '@/app/_components/common/ProfileSection';
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