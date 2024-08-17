import { IProfile } from "@/app/_models/user";
import { INavigation } from "@/app/_models/navigation";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";

interface IHeadlineProps {
    headLine: IProfile;
    theme: IStyles;
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine, theme }) => {

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
                theme={theme}
            >

                <HeadlineStandardView
                    headLine={headLine}
                    theme={theme}
                />

                {/* Mobile Version */}

                <HeadlineMobileView
                    headLine={headLine}
                    theme={theme}
                />
            </ProfileSection>
        </>

    )
}

export default Headline;