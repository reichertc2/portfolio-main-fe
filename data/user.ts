import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import logoImage from '../public/logo_basic.png'
import speedPic01 from "../public/speed.png";
import booksPic01 from "../public/books.png";
import pursuitPic01 from "../public/coders-pursuit-ss.png";
import profileImage from '../public/profile.jpeg'
import stickPic01 from '../public/stick2.png'
import confinPic01 from '../public/consapp.jpg'
import { IUserData } from "@/models/user";


export const user: IUserData = {
  profile: {
    name: "Chris Reichert",
    headline: "Software Engineer | Veteran | PMP",
    profileURL: "https://github.com/reichertc2/portfolio-main-fe",
    logo:{
      image:logoImage,
      alt:"CR Logo"
    }
  },
  aboutMe: {
    elevator: [
      "Hello. I'm Chris and I enjoy creating and automating processes through the power of code. Getting my feet wet with excel, and graduating to first JavaScript, then my language of choice Python.",
      "A veteran of the US Army aviation as an officer and pilot of the AH-64D Apache attack helicopter.",
      "I revisited programming, after hitting a barrier in the potential of excel. Frustrated by its data limitations, I ventured out and I attended a coding training program at CodeFellows, and fell in love with the power of coding.",
      "In software, there isn't a stack I'm not willing to learn or ecosystem to develop in. I have since learned TypeScript and C# through my positions, and explored the Azure development ecosystem.",
    ],
    languages: ["Python", "C#", "Javascript / TS"],
    tools: ["React / TS", "Flask", "NextJS / TS "],
    profileImage: profileImage

  },
  jobs: [
    {
      id: "exp-0",
      CompanyName: "Unite Digital",
      Position: "Software Developer",
      CompanyURL: "https://unitedigital.com/",
      Tenure: "August 2022 - Present",
      BulletPoints: [
        "Developed features and fixed bugs per assigned tasks."
        // "TBA",
        // "TBA",

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
        "Developed full stack applications from MERN to Django and Next with Postgres.",
        "Pair and mob programmed full stack applications for projects. See below for some examples",
        // "TBA",
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
          icon: faGithub
        },
      ],
      images: [
        {
          image:confinPic01,
          alt:"Personal Fintech App Pic"
        }
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
          image:stickPic01,
          alt:"Stick Figure Adventure"
        }
        
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
          image:speedPic01,
          alt:"Speed Typing Pic"
        }
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
          image:booksPic01,
          alt:"Can of Books Pic"
        }
        ],
    },
    {
      id: "sub-3",
      title: "Coders Pursuit",
      description:
        "Simple movie trivia game in Javascript, HTML, and CSS only with local storage.",
      toolList: ["VS Code"],
      urlList: [
        {
          name: "github",
          url: "https://github.com/Coders-Pursuit/Movie-Trivia",
          icon: faGithub,
        },
      ],
      images: [
        {
          image:pursuitPic01,
          alt:"Coders Pursuit Pic"
        }
        , 
    ],
    },
  ],
  contactInfo: {
    email: "chris.a.reichert@gmail.com",
    contactBrief:
      "Currently looking for meaningful work and my inbox is open. Please say hello or send me comments. Have a great day.",
    socials: [
      {
        id: "ci-01",
        url: "https://github.com/reichertc2",
        icon: faGithub,
      },
      {
        id: "ci-02",
        url: "https://www.linkedin.com/in/christopher-reichert/",
        icon: faLinkedin,
      },
    ],
  },
};
