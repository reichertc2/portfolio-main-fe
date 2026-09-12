import React from "react";
import {render, screen} from "@testing-library/react";
import {Skills} from "./Skills"; // Adjust the import path as necessary
import {IAboutMe} from "@/app/_models/user";
import ListBlock from "../ListBlock";

// Mock the ListBlock component
jest.mock("../ListBlock", () => ({
    __esModule: true,
    default: ({title, listProps}: { title: string; listProps: string[] }) => (
        <div>
            <h3>{title}</h3>
            <ul>
                {listProps.map((item, idx) => (
                    <li key={`${item}-${idx}`}>{item}</li>
                ))}
            </ul>
        </div>
    ),
}));

// Mock data for testing
const mockAboutMe: IAboutMe = {
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["VSCode", "Git", "Jest"],
    elevator: [],
    profileImage: undefined,
};

describe("Skills component", () => {
    test("renders the Languages ListBlock with correct props", () => {
        render(<Skills aboutMe={mockAboutMe}/>);

        expect(screen.getByText("Languages")).toBeInTheDocument();
        mockAboutMe.languages.forEach((language) => {
            expect(screen.getByText(language)).toBeInTheDocument();
        });
    });

    //   test("applies the correct styles to the skillsContainer", () => {
    //     render(<Skills aboutMe={mockAboutMe}  />);

    //     const skillsContainer =
    //       screen.getByRole("list").parentElement?.parentElement;
    //     expect(skillsContainer).toHaveClass("hidden sm:flex pt-8");
    //   });

    test("renders correctly with an empty languages array", () => {
        const aboutMeWithoutLanguages = {...mockAboutMe, languages: []};
        render(<Skills aboutMe={aboutMeWithoutLanguages}/>);

        expect(screen.getByText("Languages")).toBeInTheDocument();
        const languagesList = screen.queryByText("JavaScript");
        expect(languagesList).not.toBeInTheDocument();
    });

    //   test("handles empty arrays for both languages and tools gracefully", () => {
    //     const aboutMeWithEmptyArrays = { ...mockAboutMe, languages: [], tools: [] };
    //     render(<Skills aboutMe={aboutMeWithEmptyArrays} theme={mockTheme} />);

    //     expect(screen.getByText("Languages")).toBeInTheDocument();
    //     expect(screen.getByText("Tools")).toBeInTheDocument();
    //     expect(screen.queryByRole("list")).toBeNull();
    //   });
});
