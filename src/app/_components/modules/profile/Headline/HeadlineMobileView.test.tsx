import React from "react";
import {render, screen} from "@testing-library/react";
import HeadlineMobileView from "./HeadlineMobileView";
import {IProfile} from "@/app/_models/user";

describe("HeadlineMobileView", () => {
    const mockProfile: IProfile = {
        name: "John Doe",
        headline: "Full Stack Developer",
        profileURL: "",
        logo: undefined,
        quickDescription: "",
        workStatus: {
            contract: false,
            fullTime: false,
            notOpen: false
        },
    };

    test("renders without crashing", () => {
        render(<HeadlineMobileView headLine={mockProfile}/>);
        expect(screen.getByText(mockProfile.name)).toBeInTheDocument();
        expect(screen.getByText(mockProfile.headline)).toBeInTheDocument();
    });

    test("applies the correct default styles to the container", () => {
        render(<HeadlineMobileView headLine={mockProfile}/>);
        const container = screen.getByText(mockProfile.name).parentElement;
        expect(container).toHaveClass("sm:hidden block");
    });

    test("applies the correct default styles to the main headline", () => {
        render(<HeadlineMobileView headLine={mockProfile}/>);
        const mainHeadline = screen.getByText(mockProfile.name);
        expect(mainHeadline).toHaveClass(
            "dark:text-text text-xl font-semibold py-1"
        );
    });

    test("applies the correct default styles to the sub headline", () => {
        render(<HeadlineMobileView headLine={mockProfile}/>);
        const subHeadline = screen.getByText(mockProfile.headline);
        expect(subHeadline).toHaveClass(
            "dark:text-text text-sm font-semibold italic pb-3 opacity-70"
        );
    });


});
