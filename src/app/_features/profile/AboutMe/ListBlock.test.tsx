import React from "react";
import {render, screen} from "@testing-library/react";
import ListBlock from "./ListBlock";

describe("ListBlock", () => {
    const title = "Skills";
    const items = ["TypeScript", "React", "C#"];

    it("renders the title with a trailing colon", () => {
        render(<ListBlock title={title} listProps={items}/>);
        expect(screen.getByText("Skills:")).toBeInTheDocument();
    });

    it("renders every item in listProps", () => {
        render(<ListBlock title={title} listProps={items}/>);
        items.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it("renders an empty list when listProps is empty", () => {
        const {container} = render(<ListBlock title={title} listProps={[]}/>);
        const lis = container.querySelectorAll("li");
        // title li only
        expect(lis).toHaveLength(1);
        expect(screen.getByText("Skills:")).toBeInTheDocument();
    });

    it("uses horizontal (default) classes when vertical is omitted", () => {
        const {container} = render(<ListBlock title={title} listProps={items}/>);
        const ul = container.querySelector("ul");
        const titleLi = container.querySelectorAll("li")[0];
        const itemLi = container.querySelectorAll("li")[1];

        expect(ul).toHaveClass(
            "dark:text-text-dark",
            "inline-block",
            "text-sm",
            "w-4/5"
        );
        expect(titleLi).toHaveClass("pb-4", "text-semibold");
        expect(itemLi).toHaveClass(
            "m-2",
            "inline-block",
            "border-1",
            "border-secondary",
            "mx-2",
            "py-2",
            "rounded-md",
            "px-2",
            "italic"
        );
    });

    it("uses horizontal classes when vertical is false", () => {
        const {container} = render(
            <ListBlock title={title} listProps={items} vertical={false}/>
        );
        const ul = container.querySelector("ul");
        expect(ul).toHaveClass("w-4/5");
        expect(ul).not.toHaveClass("md:w-4/5");
    });

    it("uses stacked classes when vertical is true", () => {
        const {container} = render(
            <ListBlock title={title} listProps={items} vertical/>
        );
        const ul = container.querySelector("ul");
        const titleLi = container.querySelectorAll("li")[0];
        const itemLi = container.querySelectorAll("li")[1];

        expect(ul).toHaveClass(
            "dark:text-text-dark",
            "inline-block",
            "text-sm",
            "md:w-4/5"
        );
        expect(ul).not.toHaveClass("w-4/5");
        expect(titleLi).toHaveClass("text-semibold", "pb-4");
        expect(titleLi).not.toHaveClass("col-span-full");
        expect(itemLi).toHaveClass(
            "border-1",
            "border-secondary",
            "mx-2",
            "rounded-md",
            "px-2",
            "italic"
        );
        expect(itemLi).not.toHaveClass("inline", "py-2");
    });

    it("renders items in the given order", () => {
        const {container} = render(<ListBlock title={title} listProps={items}/>);
        const itemTexts = Array.from(container.querySelectorAll("li"))
            .slice(1)
            .map((li) => li.textContent);

        expect(itemTexts).toEqual(items);
    });
});