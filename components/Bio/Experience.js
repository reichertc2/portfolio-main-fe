import Link from "next/link";
import React from "react";


export default function Experience({ jobExperience }) {

    const [displayedCompany, setDisplayedCompany] = React.useState(jobExperience[0])

    const openExperience = (id = "exp-1") => {

        // console.log('openExperience', id)
        let company = jobExperience.filter(comp => comp["id"] === id)
        // console.log('openExperience', company)
        setDisplayedCompany(company[0])
        return

    }

    return (
        <section id="ExperienceSection" className="py-24 w-full pl-8">
            <h3 className="text-xl dark:text-sky-300 py-1 font-semibold  ">
                Experience
            </h3>
            <div id="ExperienceTabs" className="inline-block w-full py-8">
                <div id="tab" className="w-1/5 inline-block">

                    {
                        jobExperience.map(comp =>

                            <button
                                key={comp["id"]}
                                onClick={() => openExperience(comp.id)}
                                className="block pl-2 py-3 border-l border-sky-700 dark:text-sky-200 text-xs text-left"
                            >
                                {comp["CompanyName"]}
                            </button>
                        )
                    }

                </div>
                <div className="dark:text-sky-200 inline-block w-4/5 align-top" >
                    <h3 className="text-lg inline-block">{displayedCompany.Position} </h3>
                    <Link className="inline-block" href="https://www.divurgent.com">
                        <a > --&gt; <span className="hover-underline-animation">{displayedCompany.CompanyName}</span></a>
                    </Link>
                    <p className="text-xs dark:text-stone-900 font-semibold">{displayedCompany.Tenure}</p>
                    <ul className="p-4 text-sm w-4/5">

                        {
                            displayedCompany.BulletPoints.map((item, idx) =>
                                <li key={idx}
                                    className="img-li pl-6 pt-2 ">
                                    {item}
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </section>
    )
}