import React from "react";
import {render, screen} from "@testing-library/react";
import HeadlineStandardView from "./HeadlineStandardView";
import {IProfile, IProjectInfo} from "@/app/_models/user";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

describe("HeadlineStandardView", () => {
    const mockProfile: IProfile = {
        logo: undefined,
        quickDescription: "",
        workStatus: {
            contract: false,
            fullTime: false,
            notOpen: false
        },
        name: "Jane Doe",
        headline: "Senior Software Engineer",
        profileURL: ""
    };

    const mockProject: IProjectInfo[] = [
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
                    image: undefined,
                    alt: "Personal Fintech App Pic",
                },
            ],
        },
    ]

    test("applies the correct default styles to the container", () => {
        render(<HeadlineStandardView headLine={mockProfile} featuredProject={mockProject}/>);
        const container = screen.getByText(mockProfile.name).parentElement;
        expect(container).toHaveClass("hidden md:block");
    });
});
