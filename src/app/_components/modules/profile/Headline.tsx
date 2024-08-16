import { IProfile } from "@/app/_models/user";
import { INavigation } from "@/app/_models/navigation";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";

interface IHeadlineProps {
    headLine: IProfile;
    styling?: IStyles;
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine, styling }) => {

    const navigations: INavigation[] = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },
    ]

    return (
        <>
            <ProfileSection
                id={"Headline"}
            >

                <HeadlineStandardView
                    headLine={headLine}
                    styling={styling}
                />

                {/* Mobile Version */}

                <HeadlineMobileView
                    headLine={headLine}
                    styling={styling}
                />
            </ProfileSection>
        </>

    )
}

export default Headline;