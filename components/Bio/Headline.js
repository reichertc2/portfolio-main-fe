import { genericSectionLayout } from "../../styles/styles";
import { headlineHeaderText, subHeadlineHeaderText } from "../../styles/styles";


export default function Headline({headLine}) {

    return (
        <section className={`${genericSectionLayout()}`}>

            <p className={headlineHeaderText()}>
                {headLine["name"]}
            </p>
            <p className={subHeadlineHeaderText()}>
                {headLine["headline"]}
            </p>
        </section>
    )
}