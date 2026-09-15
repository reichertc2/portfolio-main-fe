import React from "react";
import {render, screen} from "@testing-library/react";
import LandingPage from "./LandingPage";
import type {IProfile} from "@/app/_models/user";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: {
        src: string;
        alt: string;
        className?: string;
    }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className}/>
    ),
}));

const profile = (overrides: Partial<IProfile> = {}): IProfile =>
    ({
        name: "Chris Reichert",
        logo: {
            image: "/logo.png",
            alt: "Ayris logo",
        },
        ...overrides,
    }) as IProfile;

describe("LandingPage", () => {
    it("renders the landing main landmark", () => {
        render(<LandingPage profile={profile()}/>);
        const main = document.getElementById("landingMain");
        expect(main).toBeInTheDocument();
        expect(main?.tagName).toBe("MAIN");
    });

    it("renders the logo when profile.logo is present", () => {
        render(<LandingPage profile={profile()}/>);
        const img = screen.getByAltText("Ayris logo");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/logo.png");
    });

    it("does not render an image when profile.logo is missing", () => {
        render(<LandingPage profile={profile({logo: undefined})}/>);
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("does not render an image when profile.logo is null", () => {
        render(
            <LandingPage profile={profile({logo: null as unknown as undefined})}/>
        );
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("applies container and main class names", () => {
        const {container} = render(<LandingPage profile={profile()}/>);
        const wrapper = container.firstChild as HTMLElement;
        const main = document.getElementById("landingMain");

        expect(wrapper).toHaveClass("m-auto", "transition", "delay-1000");
        expect(main).toHaveClass(
            "flex",
            "justify-center",
            "items-center",
            "w-full",
            "h-screen",
            "text-center",
            "ease-in",
            "duration-300"
        );
    });

    it("applies pulse and size classes on the logo", () => {
        render(<LandingPage profile={profile()}/>);
        expect(screen.getByAltText("Ayris logo")).toHaveClass(
            "animate-pulse",
            "rounded-full",
            "w-28",
            "h-28"
        );
    });
});