import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import logoImage from "../public/logo_basic.png";
import speedPic01 from "../public/speed.png";
import booksPic01 from "../public/books.png";
import pursuitPic01 from "../public/coders-pursuit-ss.png";
import profileImage from '../public/profile.jpeg'
import stickPic01 from '../public/stick2.png'
import confinPic01 from '../public/consapp.jpg'
import {IUserData} from "@/app/_models/user";


export const user: IUserData = {
    profile: {
        name: "Christopher Reichert",
        headline: "Software Engineer | Veteran | PMP",
        quickDescription: "Full Stack Engineer (C#, TypeScript, Azure) who turns messy business processes into working software.",
        workStatus: {
            contract: true,
            fullTime: false,
            notOpen: false
        },
        profileURL: "https://github.com/reichertc2/portfolio-main-fe",
        logo: {
            image: logoImage,
            alt: "CR Logo",
        },
    },
    aboutMe: {
        elevator: [
            "Hello. I'm Chris, a full-stack software developer who enjoys creating and automating processes through code. I started with Excel, moved into JavaScript, and found my stride in Python.",
            "Before software, I served in the U.S. Army National Guard as an officer, company commander, and AH-64D Apache attack helicopter pilot.",
            "I returned to programming after hitting Excel’s limits on data and automation. That frustration led me to Code Fellows, where I completed an advanced full-stack program and discovered a genuine love for building software.",
            "There isn’t a stack or ecosystem I won’t learn. In my current roles I’ve shipped production work in TypeScript, C#, React, Next.js, and Python across Azure, and I continue expanding into whatever tools the problem demands."
        ],
        languages: [
            "C#",
            "TypeScript",
            "JavaScript",
            "Python",
        ],
        tools: [
            "Visual Studio",
            "Rider",
            "VS Code",
            "Azure",
            "Azure DevOps",
            "GitHub",
            "SSMS",
            "Postman",
        ],
        profileImage: profileImage,
    },
    jobs: [
        {
            id: "exp-001",
            CompanyName: "Medical Solutions",
            Position: "Full Stack Software Developer",
            CompanyURL: "https://www.medicalsolutions.com/",
            Tenure: "December 2024 - Present",
            BulletPoints: [],
        },
        {
            id: "exp-0",
            CompanyName: "Unite Digital",
            Position: "Software Developer",
            CompanyURL: "https://unitedigital.com/",
            Tenure: "August 2022 - November 2024",
            BulletPoints: [
                "Module lead for Dealer Settings.",
                "Assisted in multi-tenant module development of Enrollment Center including frontend, backend, and SQL database setup.",
                "Member of team initiating development of second generation client facing Dashboard in NextJS.",
            ],
        },
        {
            id: "exp-1",
            CompanyName: "Divurgent",
            Position: "Software Engineer",
            CompanyURL: "https://www.divurgent.com",
            Tenure: "February - August 2022",
            BulletPoints: [
                "Developed SalesForce LWC for the integration of single-sign-on capability with PowerBI, Azure, and Salesforce for Community Portal.",
                "Attended and completed the Health Data Services and Azure API for FHIR Intermediate Level Classroom and Hack training.",
                "Increased testing coverage for proprietary applications in Django and Flask.",
            ],
        },

        {
            id: "exp-2",
            CompanyName: "CodeFellows",
            Position: "Full Stack developer",
            CompanyURL: "https://www.codefellows.com",
            Tenure: "July 2021- February 2022",
            BulletPoints: [
                "Developed full stack applications from MERN to Django and Next with Postgres. Introduced to TDD with Pytest.",
                "Pair and mob programmed full stack applications for projects. Examples are below.",
                "",
            ],
        },
        {
            id: "exp-3",
            CompanyName: "US FUSION & Specialty Construction",
            Position: "Project Manager",
            CompanyURL: "https://www.usfusion.com",
            Tenure: "May 2019 - July 2021",
            BulletPoints: [
                "Designed excel application to manage changes to scope, cost, and documentation. This application was applied to monitor a successful $2M HDD pipe installation project resulting in equipment, labor, and subcontractor costs 20% below estimated margins.",
                "Mentored and trained aspiring project leaders in project management processes, cost estimation, and blueprint reading.",
                // "TBA",
            ],
        },
        {
            id: "exp-4",
            CompanyName: "Texas Army National Guard",
            Position: "Company Commander / Pilot",
            CompanyURL: "https://www.nationalguard.com",
            Tenure: "December 2006 - December 2017",
            BulletPoints: [
                "Led 35 personnel for an aviation company of 8 Apache helicopters, mentored and monitored training on: tactical and office operations, flight instruction, and safety.",
                // "TBA",
                // "TBA"
            ],
        },
    ],
    projects: [
        {
            id: "feat-1",
            title: "Personal Fintech App",
            description:
                "A personal application to help individuals determine portfolio allocations.",
            toolList: ["Flask", "React TS", "Tailwind"],
            urlList: [
                {
                    name: "github",
                    url: "https://github.com/reichertc2",
                    icon: faGithub,
                },
            ],
            images: [
                {
                    image: confinPic01,
                    alt: "Personal Fintech App Pic",
                },
                {
                    image: confinPic01,
                    alt: "Personal Fintech App Pic",
                },
                {
                    image: confinPic01,
                    alt: "Personal Fintech App Pic",
                },
            ],
        },
    ],
    subprojects: [
        {
            id: "sub-0",
            title: "Stick Figure Adventure",
            description:
                "Designed full stack retro text-based adventure game. It includes Django, React.js, and TailwindCSS. Pair and mob programmed with three others and deployed with Docker Container and to Vercel.",
            toolList: ["Django", "Next.js", "Tailwind", "VS Code"],
            urlList: [
                {
                    name: "github",
                    url: "https://github.com/reichertc2",
                    icon: faGithub,
                },
            ],
            images: [
                {
                    image: stickPic01,
                    alt: "Stick Figure Adventure",
                },
            ],
        },
        {
            id: "sub-1",
            title: "Speed Typing App",
            description:
                "Typing test app demonstrating the speed of a python serverless function.",
            toolList: ["Serverless Function", "React", "VS Code"],
            urlList: [
                {
                    name: "github1",
                    url: "https://github.com/940s/speed_typing",
                    icon: faGithub,
                },
                {
                    name: "github2",
                    url: "https://github.com/940s/speed_typing_fe",
                    icon: faGithub,
                },
            ],
            images: [
                {
                    image: speedPic01,
                    alt: "Speed Typing Pic",
                },
            ],
        },
        {
            id: "sub-2",
            title: "Can of Books",
            description:
                "Reading list application. Simple application utilizing CRUD and MongoDB.  ",
            toolList: ["React", "Node.js", "Auth0", "MongoDB", "VS Code"],
            urlList: [
                {
                    name: "github1",
                    url: "https://github.com/reichertc2/can-of-books",
                    icon: faGithub,
                },
                {
                    name: "github2",
                    url: "https://github.com/reichertc2/can-of-books-api",
                    icon: faGithub,
                },
            ],
            images: [
                {
                    image: booksPic01,
                    alt: "Can of Books Pic",
                },
            ],
        },
    ],
    contactInfo: {
        email: "chris.a.reichert@gmail.com",
        contactBrief:
            "For collaborators, recruiters, and for anyone with a serious project or question.",
        socials: [
            {
                id: "ci-01",
                name: "GitHub",
                url: "https://github.com/reichertc2",
                icon: faGithub,
            },
            {
                id: "ci-02",
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/christopher-reichert/",
                icon: faLinkedin,
            },
            {
                id: "ci-03",
                name: "X",
                url: "https://twitter.com/_chrisreichert_",
                icon: faXTwitter,
            }
        ],
    },
};
