"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IJobInfo } from "@/models/user";
import { IStyles } from "@/components/ui/MainClientPage";

interface ITabSelectorProps {
    jobExperience: IJobInfo[];
    styles?: IStyles;
}

export const TabSelector: React.FC<ITabSelectorProps> = ({ jobExperience, styles }) => {

    const [displayedCompany, setDisplayedCompany] = useState<IJobInfo>(jobExperience[0])

    const openExperience = (id = "exp-1") => {
        let company = jobExperience.filter(comp => comp["id"] === id)
        setDisplayedCompany(company[0])
    }

    return (
        <>
            <div id="ExperienceTabs" className="inline-block w-full p-1">
                <div id="tab" className="w-1/5 inline-block">

                    {
                        jobExperience.map(comp =>

                            <button
                                key={comp["id"]}
                                onClick={() => openExperience(comp.id)}
                                className={`my-1 block pl-4 py-3 border border-sky-600 rounded-md dark:text-stone-100 text-xs text-left w-full `}
                            >
                                {comp["CompanyName"]}
                            </button>
                        )
                    }

                </div>
                <div className={`px-4 dark:text-stone-100 inline-block w-4/5 align-top`} >
                    <h3 className="text-lg inline-block">{displayedCompany.Position} </h3>
                    <Link className="inline-block" href={displayedCompany.CompanyURL}>
                        <span> --&gt; <span className="hover-underline-animation">{displayedCompany.CompanyName}</span></span>
                    </Link>
                    <p className={`text-xs dark:text-stone-100 font-semibold`}>{displayedCompany.Tenure}</p>
                    <ul className="p-4 text-sm w-full">

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
        </>
    )
}

export default TabSelector;