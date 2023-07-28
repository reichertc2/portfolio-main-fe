"use client"

import { IUserData } from '@/models/user';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Experience from './Experience';
import FeaturedProject from './FeaturedProject';
import Headline from './Headline';
import OtherProjects from './OtherProjects';
import { IStyles } from '@/models/styles';
import MainContainer from '@/components/common/MainContainer';


interface IProfileMainProps {
    profileMain: IUserData;
    styles?: IStyles;
}

export const ProfileMain: React.FC<IProfileMainProps> = ({ profileMain, styles }) => {

    return (
        <MainContainer>

            <Headline
                headLine={profileMain["profile"]}
                styling={styles}
            />
            <AboutMe
                aboutMe={profileMain["aboutMe"]}
                styling={styles}
            />
            <Experience
                jobExperience={profileMain["jobs"]}
                styles={styles}
            />
            <FeaturedProject projectWorks={profileMain["projects"]} />
            <OtherProjects projectWorks={profileMain["subprojects"]} />
            <ContactMe contactInfo={profileMain["contactInfo"]} />

        </MainContainer>
    )
}

export default ProfileMain;