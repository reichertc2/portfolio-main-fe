import BasicSectionHeader from "../../default/common/BasicSectionHeader";
import Link from "next/link";
import React from "react";
import { baseDarkText, baseBorder } from "../../../styles/colors";
import { genericSectionLayout } from "../../../styles/styles";

export default function Experience({ jobExperience }) {

    const [displayedCompany, setDisplayedCompany] = React.useState(jobExperience[0])

    const openExperience = (id = "exp-1") => {
        let company = jobExperience.filter(comp => comp["id"] === id)
        setDisplayedCompany(company[0])
    }

    return (
        <section id="ExperienceSection" className={`${genericSectionLayout}`}>
            <BasicSectionHeader 
                headerTitle={"Experience"}
            />
            <div id="ExperienceTabs" className="inline-block w-full py-8">
                <div id="tab" className="w-1/5 inline-block">

                    {
                        jobExperience.map(comp =>

                            <button
                                key={comp["id"]}
                                onClick={() => openExperience(comp.id)}
                                className={`block pl-2 py-3 border-l ${baseBorder} dark:${baseDarkText} text-xs text-left`}
                            >
                                {comp["CompanyName"]}
                            </button>
                        )
                    }

                </div>
                <div className={`dark:${baseDarkText} inline-block w-4/5 align-top`} >
                    <h3 className="text-lg inline-block">{displayedCompany.Position} </h3>
                    <Link className="inline-block" href={displayedCompany.CompanyURL}>
                        <a > --&gt; <span className="hover-underline-animation">{displayedCompany.CompanyName}</span></a>
                    </Link>
                    <p className={`text-xs dark:${baseDarkText} font-semibold`}>{displayedCompany.Tenure}</p>
                    <ul className="p-4 text-sm w-4/5">

                        {
                            displayedCompany.BulletPoints.map((item, idx) =>
                                <li key={idx}
                                    className="img-li pl-6 pt-2">
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