import { IProfile } from "@/app/default/models/user";
import NavBar from "@/app/default/common/components/NavBar";
import { INavigation } from "@/app/default/models/navigation";
import { useEffect, useState } from "react";

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

    const headlineStyleLarge: IHeadlineStyle = {
        section: `flex justify-start p-1 w-full`,
        name: `dark:text-stone-100 text-7xl font-semibold py-1`,
        headline: `dark:text-stone-900 text-5xl font-semibold italic  pt-1 pb-3 opacity-70`
    }

    const headlineStyleSmall: IHeadlineStyle = {
        section: `flex justify-start p-1 w-full justify-start`,
        name: `text-stone-100 text-4xl font-semibold scale-50 w-full`,
        headline: `dark:text-stone-900 text-2xl font-semibold italic opacity-70 scale-50 w-full`
    }

    const [headlineStyle, setHeadlineStyle] = useState<IHeadlineStyle>(headlineStyleLarge)

    const navigations: INavigation[] = [
        { label: 'About', path: '#AboutMeSection' },
        { label: 'Experience', path: '#ExperienceSection' },
        { label: 'Work', path: '#WorkSection' },
        { label: 'Contact', path: '#ContactSection' },
    ]

    // const handleSizeStyleChange = () => {
    //     setTimeout(() => setHeadlineStyle(headlineStyleSmall), 1000)

    //     console.log("handleSizeStyleChange")
    // }

    // useEffect(() => {
    //     handleSizeStyleChange()
    // }, [])

    return (
        <section className="flex">
            <div className={headlineStyle["section"]}>

                <p className={headlineStyle["name"]}>
                    {headLine["name"]}
                </p>
                <p className={headlineStyle["headline"]}>
                    {headLine["headline"]}
                </p>

     
            </div>
           {/* <NavBar
                navigations={navigations}
                showThemeChange={false}
            /> */}
        </section>
    )
}

export default Headline;