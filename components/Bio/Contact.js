export default function ContactMe({ contactInfo }) {
    return (
        <section id="ContactSection" className="py-24 w-full pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                Contact
            </h3>
            <div className="inline-block w-full text-center content-center">

                <h2 className="text-7xl font-semibold italic text-sky-200 pt-1 pb-3 opacity-70">
                    Reach Out
                </h2>
                <p className="text-stone-900 p-1 rounded-md m-3">{contactInfo["contactBrief"]}</p>
                <button
                    className="text-sky-200 p-2 inline-block border-2 border-solid border-sky-200 rounded-md ">
                        <a href={`mailto: ${contactInfo["email"]}`}>Ping Me</a>

                    
                </button>
            </div>


        </section>
    )
}