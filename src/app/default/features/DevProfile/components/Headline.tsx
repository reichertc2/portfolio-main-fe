import { genericSectionLayout } from "../../../../styles/styles";
import { baseDarkText } from "../../../../styles/colors";
import { IProfile } from "@/app/default/models/user";

interface IHeadlineProps {
    headLine: IProfile;
}

export const Headline: React.FC<IHeadlineProps> = ({ headLine }) => {

    return (
        <section className={`${genericSectionLayout}`}>

            <p className={`text-sky-100 text-7xl font-semibold py-1`}>
                {headLine["name"]}
            </p>
            <p className={`text-5xl font-semibold italic dark:${baseDarkText} pt-1 pb-3 opacity-70`}>
                {headLine["headline"]}
            </p>
        </section>
    )
}

export default Headline;