import { IProfile } from "@/app/default/models/user";
import { INavigation } from "@/app/default/models/navigation";

interface IHeadlineProps {
    headLine: IProfile;
}

interface IHeadlineStyle {
    section: string;
    name: string;
    headline: string;
    navBar?: string
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine }) => {

    const navigations: INavigation[] = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },
    ]


    return (
        <section className={`flex flex-col justify-start p-1 w-full`}>

            <p className={`dark:text-stone-100 text-7xl font-semibold py-1`}>
                {headLine["name"]}
            </p>
            <p className={`dark:text-sky-200 text-5xl font-semibold italic pt-1 pb-3 opacity-70`}>
                {headLine["headline"]}
            </p>

        </section>
    )
}

export default Headline;