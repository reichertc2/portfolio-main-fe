import Link from "next/link";
import React from "react";

const jobExperience = {
    "jobs": [
        {
            "id": "exp-1",
            "CompanyName": "Divurgent",
            "Position": "Software Engineer",
            "CompanyURL": "https://www.divurgent.com",
            "Tenure": "February - August 2022",
            "BulletPoints": [
                "Project assigned was the development, testing, and deployment of the new customer portal native to SalesForce.",
                "Attended and completed the Health Data Services and Azure API for FHIR Intermediate Level Classroom and Hack training.",
                "Increased testing coverage for proprietary applications in Django and Flask."
            ]
        },

        {
            "id": "exp-2",
            "CompanyName": "CodeFellows",
            "Position": "Full Stack developer",
            "CompanyURL": "https://www.codefellows.com",
            "Tenure": "July 2021- February 2022",
            "BulletPoints": [
                "TBA",
                "TBA",
                "TBA"
            ]
        },
        {
            "id": "exp-3",
            "CompanyName": "US FUSION & Specialty Construction",
            "Position": "Project Manager",
            "CompanyURL": "https://www.usfusion.com",
            "Tenure": "May 2019 - July 2021",
            "BulletPoints": [
                "TBA",
                "TBA",
                "TBA"
            ]
        },
        {
            "id": "exp-4",
            "CompanyName": "Texas Army National Guard",
            "Position": "Company Commander / Pilot",
            "CompanyURL": "https://www.nationalguard.com",
            "Tenure": "December 2006 - December 2017",
            "BulletPoints": [
                "TBA",
                "TBA",
                "TBA"
            ]
        },
        {
            "id": "exp-5",
            "CompanyName": "Zachry",
            "Position": "Senior Project Coordinator",
            "CompanyURL": "https://www.zacherygroup.com",
            "Tenure": "April 2018 - May 2019",
            "BulletPoints": [
                "TBA",
                "TBA",
                "TBA"
            ]
        },
    ]
}


export default function Experience() {


    const [displayedCompany, setDisplayedCompany] = React.useState(jobExperience["jobs"][0])

    const openExperience = (id = "exp-1") => {

        console.log('openExperience', id)
        let company = jobExperience["jobs"].filter(comp => comp["id"] === id)
        // company = {}
        console.log('openExperience', company)

        setDisplayedCompany(company[0])
        return

    }

    return (
        <section id="ExperienceSection" className="py-24 w-full pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                Experience
            </h3>
            <div id="ExperienceTabs" className="inline-block w-full py-8">
                <div id="tab" className="w-1/5 inline-block">
                    {
                        jobExperience["jobs"].map(comp =>

                            <button
                                key={comp["id"]}
                                onClick={() => openExperience(comp.id)}
                                className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left"
                            >
                                {comp["CompanyName"]}
                            </button>


                        )
                    }
                </div>


                {/* {
                        jobExperience["jobs"].filter(id => id.id === "exp-1")
                    } */}



                <div className="text-sky-200 inline-block w-4/5 align-top" >

                    <h3 className="text-lg inline-block">{displayedCompany.Position} </h3>
                    <Link className="inline-block" href="https://www.divurgent.com">
                        <a > --> <span className="hover-underline-animation">{displayedCompany.CompanyName}</span></a>
                    </Link>

                    <p className="text-xs text-stone-900 font-semibold">{displayedCompany.Tenure}</p>

                    <ul className="p-4 text-sm w-4/5">
                        {
                            displayedCompany.BulletPoints.map(( item, idx) =>
                                <li key={idx}
                                    className="pt-2 list-disc">
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