export default function Headline({headLine}) {

    return (
        <section className="pt-48 pb-28">
            <h6 className="dark:text-sky-400 italic">
                Hi, my name is
            </h6>
            <h2 className="text-7xl font-semibold text-sky-100 py-1">
                {headLine["name"]}
            </h2>
            <h2 className="text-7xl font-semibold italic dark:text-sky-200 pt-1 pb-3 opacity-70">
                {headLine["headline"]}
            </h2>
        </section>
    )
}