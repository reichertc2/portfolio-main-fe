import { IProfile } from "@/models/user";
import { INavigation } from "@/models/navigation";
import HeadlineMobileView from "./Headline/HeadlineMobileView";
import HeadlineStandardView from "./Headline/HeadlineStandardView";
import { IStyles } from "@/models/styles";

interface IHeadlineProps {
    headLine: IProfile;
    styling?: IStyles;
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine, styling }) => {

    const styles = {
        container: `flex flex-col justify-start p-1 w-full`
    }

    const navigations: INavigation[] = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },
    ]


    return (
        <>
            <section className={styles.container}>

                <HeadlineStandardView
                    headLine={headLine}
                    styling={styling}
                />

                {/* Mobile Version */}

                <HeadlineMobileView
                    headLine={headLine}
                    styling={styling}
                />
            </section>
        </>

    )
}

export default Headline;