import { IUserData } from '@/app/_models/user';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Headline from './Headline';
import { IStyles } from '@/app/_models/styles';
import MainContainer from '@/app/_components/common/MainContainer';
import OtherProjects from './OtherProjects';
import ContactMe from './ContactMe';
import FeaturedProject from './FeaturedProject';


interface IProfileMainProps {
    profileMain: IUserData;
    styling?: IStyles;
}

export const ProfileMain: React.FC<IProfileMainProps> = ({ profileMain, styling }) => {

    return (
        <MainContainer>

            <Headline
                headLine={profileMain["profile"]}
                styling={styling}
            />
            <AboutMe
                aboutMe={profileMain["aboutMe"]}
                styling={styling}
            />
            <Experience
                jobExperience={profileMain["jobs"]}
                styling={styling}
            />
            <FeaturedProject
                projectWorks={profileMain["projects"]}
                styling={styling}
            />
            <OtherProjects
                projectWorks={profileMain["subprojects"]}
                styling={styling}
            />
            <ContactMe
                contactInfo={profileMain["contactInfo"]}
                styling={styling}
            />

        </MainContainer>
    )
}

export default ProfileMain;