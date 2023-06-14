import { IProfile } from "@/app/default/models/user";
import { INavigation } from "@/app/default/models/navigation";
import { IStyles } from "@/app/default/common/MainClientPage";

interface IHeadlineProps {
    headLine: IProfile;
    styles: IStyles;
}



export const Headline: React.FC<IHeadlineProps> = ({ headLine, styles }) => {

    const navigations: INavigation[] = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },
    ]


    return (
        <>
            <section className={`flex flex-col justify-start p-1 w-full`}>
                <div className="hidden md:block">
                    <p className={`dark:${styles.darkText} text-7xl font-semibold py-1`}>
                        {headLine["name"]}
                    </p>
                    <p className={`dark:${styles.accentText} text-5xl font-semibold italic pt-1 pb-3 opacity-70`}>
                        {headLine["headline"]}
                    </p>
                </div>

                {/* Mobile Version */}

                <div className="sm:hidden block">
                    <p className={`dark:${styles.darkText} text-xl font-semibold py-1`}>
                        {headLine["name"]}
                    </p>
                    <p className={`dark:${styles.accentText} text-sm font-semibold italic pb-3 opacity-70`}>
                        {headLine["headline"]}
                    </p>
                </div>
            </section>
        </>

    )
}

export default Headline;