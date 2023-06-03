import { genericSectionLayout } from "../../styles/styles";
import { baseDarkText, testBackgroundColor } from "../../styles/colors";

export default function Headline({headLine}) {

    return (
        <section className={`${genericSectionLayout()} ${testBackgroundColor}`}>

            <p className={ `text-sky-100 text-7xl  font-semibold py-1`}>
                {headLine["name"]}
            </p>
            <p className={`text-5xl font-semibold italic dark:${baseDarkText} pt-1 pb-3 opacity-70`}>
                {headLine["headline"]}
            </p>
        </section>
    )
}