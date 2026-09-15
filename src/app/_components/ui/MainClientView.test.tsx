import React from "react";
import {act, render, screen} from "@testing-library/react";
import MainClientView from "./MainClientView";

const userMock = {
    profile: {
        name: "Chris Reichert",
        logo: {image: "/logo.png", alt: "Logo"},
    },
};

jest.mock("../../../../data/user", () => ({
    user: {
        profile: {
            name: "Chris Reichert",
            logo: {image: "/logo.png", alt: "Logo"},
        },
    },
}));

jest.mock("./LandingPage", () => ({
    __esModule: true,
    default: ({profile}: { profile: { name?: string } }) => (
        <div data-testid="landing-page">{profile?.name}</div>
    ),
}));

jest.mock("./Header", () => ({
    __esModule: true,
    default: ({profileMain}: { profileMain: unknown }) => (
        <header data-testid="header">{profileMain ? "has-profile" : ""}</header>
    ),
}));

jest.mock("./Footer", () => ({
    __esModule: true,
    default: ({profileMain}: { profileMain: unknown }) => (
        <footer data-testid="footer">{profileMain ? "has-profile" : ""}</footer>
    ),
}));

describe("MainClientView", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        act(() => {
            jest.runOnlyPendingTimers();
        });
        jest.useRealTimers();
    });

    it("shows LandingPage before the enter timeout", () => {
        render(
            <MainClientView>
                <p>Page content</p>
            </MainClientView>
        );

        expect(screen.getByTestId("landing-page")).toBeInTheDocument();
        expect(screen.getByText("Chris Reichert")).toBeInTheDocument();
        expect(screen.queryByTestId("header")).not.toBeInTheDocument();
        expect(screen.queryByTestId("footer")).not.toBeInTheDocument();
        expect(screen.queryByText("Page content")).not.toBeInTheDocument();
    });

    it("swaps to Header, children, and Footer after 10ms", () => {
        render(
            <MainClientView>
                <p>Page content</p>
            </MainClientView>
        );

        act(() => {
            jest.advanceTimersByTime(10);
        });

        expect(screen.queryByTestId("landing-page")).not.toBeInTheDocument();
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
        expect(screen.getByText("Page content")).toBeInTheDocument();
    });

    it("does not enter before 10ms", () => {
        render(<MainClientView/>);

        act(() => {
            jest.advanceTimersByTime(9);
        });

        expect(screen.getByTestId("landing-page")).toBeInTheDocument();
        expect(screen.queryByTestId("header")).not.toBeInTheDocument();
    });

    it("passes user data into Header and Footer after enter", () => {
        render(<MainClientView/>);

        act(() => {
            jest.advanceTimersByTime(10);
        });

        expect(screen.getByTestId("header")).toHaveTextContent("has-profile");
        expect(screen.getByTestId("footer")).toHaveTextContent("has-profile");
    });

    it("passes profileMain.profile into LandingPage", () => {
        render(<MainClientView/>);
        expect(screen.getByTestId("landing-page")).toHaveTextContent(
            "Chris Reichert"
        );
    });

    it("applies the outer container classes", () => {
        const {container} = render(<MainClientView/>);
        const wrapper = container.querySelector("div.m-auto");

        expect(wrapper).toHaveClass("m-auto", "min-h-screen", "text-text");
    });

    it("renders without children after enter", () => {
        render(<MainClientView/>);

        act(() => {
            jest.advanceTimersByTime(10);
        });

        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    });
});