import Link from "next/link";

export default function Experience() {
    const openExperience = (e, companyName) => {

        console.log('openExperience')
        let i, tabcontent, tabLinks;

        tabcontent = document.getElementsByClassName('tabcontent')
        // for (i = 0; i < tabcontent.length; i++){
        //     tabcontent[i].style
        // }
        tabLinks = document.getElementsByClassName('tablinks')
        // for (i = 0; i < tabcontent.length; i++){
        //     tabLinks[i].className = tabLinks[i].className.replace(" active", "")
        // }

        document.getElementById(companyName)
        // e.currentTarget.className += " active"


    }

    return (
        <section id="ExperienceSection" className="py-24 w-4/5 pl-8">
            <h3 className="text-xl text-sky-300 py-1 font-semibold  ">
                Experience
            </h3>
            <div id="ExperienceTabs" className="inline-block w-full py-8">
                <div id="tab" className="w-32 float-left">
                    <button className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left" >Divurgent</button>
                    <button className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left" >CodeFellows</button>
                    <button className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left" >US FUSION Specialty Construction</button>
                    <button className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left" >Texas Army National Guard</button>
                    <button className="block pl-2 py-3 border-l border-sky-700 text-sky-200 text-xs text-left" >Zachry</button>


                </div>
                <div className="text-sky-200" >
                    <h3 className="text-lg inline-block">Software Engineer </h3>
                    <Link className="inline-block" href="https://www.divurgent.com">
                        <a > --> <span className="hover-underline-animation">Divurgent</span></a>
                    </Link>

                    <p className="text-xs">February - August 2022</p>

                    <ul className="p-4 text-sm w-4/5">
                        <li className="pt-2">~ Project assigned was the development, testing, and deployment of the new customer portal native to SalesForce.</li>
                        <li className="py-1.5">~ Attended and completed the Health Data Services and Azure API for FHIR Intermediate Level Classroom and Hack training.</li>
                        <li className="py-1.5">~ Increased testing coverage for proprietary applications in Django and Flask.</li>
                    </ul>
                </div>

            </div>


        </section>
    )
}