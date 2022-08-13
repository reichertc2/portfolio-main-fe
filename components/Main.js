import Head from 'next/head'
import Headline from './Bio/Headline'
import AboutMe from './Bio/AboutMe'
import Experience from './Bio/Experience'
import Work from './Bio/Work'
import ContactMe from './Bio/Contact'


export default function Main() {

    const profileMain = {
        "profile": {
            "name": "Chris Reichert",
            "headline": "Software Engineer | Veteran | PMP"
        },
        "aboutMe":
        {
            "elevator": [
                "Hello. My name is Chris and i enjoy creating and automating processes through the power of code. My ineterest began while I was in high school where I wrote my first HTML code.",
                "I stepped away from software to pursue a military career in aviation as an officer and pilot of the AH-64D attack helicopter.",
                "I then pursued a career in construction as a project manager earning my Project Management Professional (PMP).",
                "I finally revisited programming and fell in love. I attended a coding training program at CodFellows, which I highly recommend."
            ],
            "languages": [
                "Python",
                "Javascript",
                "Apex"
            ],
            "tools": [
                "Django",
                "Flask",
                "React",
                "Next.js",
                "Node.js",
            ]
        },
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
        ],
        "projects": [
            {
                "id": "feat-1",
                "title": "Project Title",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit velit sit amet leo pharetra euismod. Nunc eleifend quam nec urna lacinia, sit amet auctor ex finibus. Duis ac lobortis neque, id feugiat ante.",
                "toolList": [
                    "tool a",
                    "tool b",
                    "tool c",
                    "tool d",

                ],
                "urlList": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/reichertc2",
                    }
                    ,
                ],
                "images": [
                    "placeHolderImage"
                ]
            }
        ],
        "contactInfo":{
            "email":"chris.a.reichert@gmail.com",
            "contactBrief":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit velit sit amet leo pharetra euismod. Nunc eleifend quam nec urna lacinia, sit amet auctor ex finibus. Duis ac lobortis neque, id feugiat ante. Quisque gravida risus et magna vulputate sollicitudin."
        }
    }

    return (
        <>
            <Head>
                <title>Portfolio - {profileMain["profile"]["name"]}</title>
                <meta
                    name="description"
                    content="Generated by create next app" />
            </Head>
            <main className='m-auto w-2/3' >
                <article
                    id="mainContainer">
                    <Headline headLine={profileMain["profile"]} />
                    <AboutMe aboutMe={profileMain["aboutMe"]}/>
                    <Experience jobExperience={profileMain["jobs"]} />
                    <Work projectWorks={profileMain["projects"]}/>
                    <ContactMe contactInfo={profileMain["contactInfo"]} />
                </article>
            </main>
        </>
    )
}