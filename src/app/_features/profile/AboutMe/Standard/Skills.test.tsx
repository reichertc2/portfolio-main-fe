import React from "react";
import {render, screen} from "@testing-library/react";
import Skills from "./Skills";

jest.mock("../ListBlock", () => ({
    __esModule: true,
    default: ({title, listProps}: { title: string; listProps: string[] }) => (
        <div data-testid="list-block">
            <span data-testid="list-block-title">{title}</span>
            <ul>
                {listProps.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    ),
}));

describe("Skills", () => {
    const title = "Core Skills";
    const skills = ["TypeScript", "React", "C#"];

    it("wraps content in the skills container", () => {
        const {container} = render(<Skills title={title} skills={skills}/>);
        const wrapper = container.firstChild as HTMLElement;

        expect(wrapper.tagName).toBe("DIV");
        expect(wrapper).toHaveClass("my-4", "pl-4");
    });

    it("renders ListBlock", () => {
        render(<Skills title={title} skills={skills}/>);
        expect(screen.getByTestId("list-block")).toBeInTheDocument();
    });

    it("passes title through to ListBlock", () => {
        render(<Skills title={title} skills={skills}/>);
        expect(screen.getByTestId("list-block-title")).toHaveTextContent(title);
    });

    it("passes skills through as listProps", () => {
        render(<Skills title={title} skills={skills}/>);
        skills.forEach((skill) => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        });
    });

    it("renders nothing extra when skills is empty", () => {
        render(<Skills title={title} skills={[]}/>);
        expect(screen.getByTestId("list-block")).toBeInTheDocument();
        expect(screen.getByTestId("list-block-title")).toHaveTextContent(title);
        expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
});