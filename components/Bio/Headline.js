import { baseDarkText } from "../../styles/colors";


export default function Headline({headLine}) {

    return (
        <section className="pt-48 pb-28 w-4/5">
            <h6 className={`dark:${baseDarkText()} italic`}>
                Hi, my name is
            </h6>
            <h2 className={`text-7xl text-sky-100 font-semibold py-1`}>
                {headLine["name"]}
            </h2>
            <h2 className={`text-5xl font-semibold italic dark:${baseDarkText()} pt-1 pb-3 opacity-70`}>
                {headLine["headline"]}
            </h2>
        </section>
    )
}