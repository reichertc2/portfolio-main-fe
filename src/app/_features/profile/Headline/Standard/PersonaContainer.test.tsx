import React from "react";
import {render, screen} from "@testing-library/react";
import PersonaContainer from "./PersonaContainer";
import type {IProfile} from "@/app/_models/user";

const profile = (overrides: Partial<IProfile> = {}): IProfile =>
    ({
        name: "Chris Reichert",
        headline: "Software Developer",
        quickDescription: "C# / TypeScript",
        ...overrides,
    }) as IProfile;

describe("PersonaContainer", () => {
    it("renders the name as the main headline", () => {
        render(<PersonaContainer persona={profile()}/>);
        expect(screen.getByText("Chris Reichert")).toBeInTheDocument();
    });

    it("appends quickDescription to the headline with an em dash", () => {
        render(<PersonaContainer persona={profile()}/>);
        expect(
            screen.getByText("Software Developer — C# / TypeScript")
        ).toBeInTheDocument();
    });

    it("omits the em dash when quickDescription is empty", () => {
        render(
            <PersonaContainer persona={profile({quickDescription: ""})}/>
        );
        expect(screen.getByText("Software Developer")).toBeInTheDocument();
        expect(screen.queryByText(/—/)).not.toBeInTheDocument();
    });

    it("omits the em dash when quickDescription is undefined", () => {
        render(
            <PersonaContainer
                persona={profile({quickDescription: undefined})}
            />
        );
        expect(screen.getByText("Software Developer")).toBeInTheDocument();
        expect(screen.queryByText(/—/)).not.toBeInTheDocument();
    });

    it("applies container and headline class names", () => {
        const {container} = render(
            <PersonaContainer persona={profile()}/>
        );
        const wrapper = container.firstChild as HTMLElement;
        const [nameEl, subEl] = wrapper.querySelectorAll("p");

        expect(wrapper).toHaveClass("block", "w-full", "mt-6", "mb-4");
        expect(nameEl).toHaveClass(
            "dark:text-text-dark",
            "text-3xl",
            "sm:text-4xl",
            "md:text-6xl",
            "font-semibold",
            "py-1",
            "leading-tight"
        );
        expect(subEl).toHaveClass(
            "dark:text-text-dark",
            "text-base",
            "sm:text-lg",
            "md:text-xl",
            "font-semibold",
            "italic",
            "pt-1",
            "pb-3",
            "opacity-70"
        );
    });

    it("does not use the unused quickDescription style class", () => {
        const {container} = render(
            <PersonaContainer persona={profile()}/>
        );
        const paragraphs = container.querySelectorAll("p");
        paragraphs.forEach((p) => {
            expect(p).not.toHaveClass("text-sm");
            expect(p).not.toHaveClass("md:text-md");
        });
    });
});