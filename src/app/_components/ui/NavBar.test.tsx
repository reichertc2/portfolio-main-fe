import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import NavBar from "./NavBar";
import type {INavigation} from "@/app/_models/navigation";

const setTheme = jest.fn();
let themeMock: { systemTheme?: string; theme?: string; setTheme: jest.Mock } = {
    systemTheme: "light",
    theme: "light",
    setTheme,
};

jest.mock("next-themes", () => ({
    useTheme: () => themeMock,
}));

jest.mock("@fortawesome/react-fontawesome", () => ({
    FontAwesomeIcon: ({icon}: { icon: { iconName?: string } }) => (
        <span data-testid={`icon-${icon?.iconName ?? "unknown"}`}/>
    ),
}));

jest.mock("@fortawesome/free-solid-svg-icons", () => ({
    faSun: {iconName: "sun"},
    faMoon: {iconName: "moon"},
}));

jest.mock("./NavBar/NavBarContainer", () => ({
    __esModule: true,
    default: ({
                  logo,
                  children,
              }: {
        logo: unknown;
        children: React.ReactNode;
    }) => (
        <div data-testid="nav-bar-container" data-logo={String(logo)}>
            {children}
        </div>
    ),
}));

jest.mock("./NavBar/NavBarStandardView", () => ({
    __esModule: true,
    default: ({
                  navigations,
                  renderThemeChanger,
                  showThemeChange,
              }: {
        navigations: INavigation[];
        renderThemeChanger: () => React.ReactNode;
        showThemeChange: boolean;
    }) => (
        <div
            data-testid="nav-bar-standard"
            data-nav-count={navigations.length}
            data-show-theme={String(showThemeChange)}
        >
            {renderThemeChanger()}
        </div>
    ),
}));

jest.mock("./NavBar/NavBarMobileView", () => ({
    __esModule: true,
    default: ({navigations}: { navigations: INavigation[] }) => (
        <div data-testid="nav-bar-mobile" data-nav-count={navigations.length}/>
    ),
}));

const navigations = [
    {path: "/", label: "Home"},
    {path: "/work", label: "Work"},
] as INavigation[];

const logo = {src: "/logo.png", alt: "Logo"};

describe("NavBar", () => {
    beforeEach(() => {
        setTheme.mockClear();
        themeMock = {
            systemTheme: "light",
            theme: "light",
            setTheme,
        };
    });

    it("renders container, standard view, and mobile view", () => {
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );

        expect(screen.getByTestId("nav-bar-container")).toBeInTheDocument();
        expect(screen.getByTestId("nav-bar-standard")).toBeInTheDocument();
        expect(screen.getByTestId("nav-bar-mobile")).toBeInTheDocument();
    });

    it("passes logo to NavBarContainer", () => {
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );
        expect(screen.getByTestId("nav-bar-container")).toHaveAttribute(
            "data-logo",
            String(logo)
        );
    });

    it("forwards navigations to standard and mobile views", () => {
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange={false}
            />
        );
        expect(screen.getByTestId("nav-bar-standard")).toHaveAttribute(
            "data-nav-count",
            "2"
        );
        expect(screen.getByTestId("nav-bar-mobile")).toHaveAttribute(
            "data-nav-count",
            "2"
        );
    });

    it("forwards showThemeChange to the standard view", () => {
        const {rerender} = render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange={false}
            />
        );
        expect(screen.getByTestId("nav-bar-standard")).toHaveAttribute(
            "data-show-theme",
            "false"
        );

        rerender(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );
        expect(screen.getByTestId("nav-bar-standard")).toHaveAttribute(
            "data-show-theme",
            "true"
        );
    });

    it("renders a moon button in light theme and switches to dark", () => {
        themeMock.theme = "light";
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );

        expect(screen.getByTestId("icon-moon")).toBeInTheDocument();
        expect(screen.queryByTestId("icon-sun")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button"));
        expect(setTheme).toHaveBeenCalledWith("dark");
    });

    it("renders a sun button in dark theme and switches to light", () => {
        themeMock.theme = "dark";
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );

        expect(screen.getByTestId("icon-sun")).toBeInTheDocument();
        expect(screen.queryByTestId("icon-moon")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button"));
        expect(setTheme).toHaveBeenCalledWith("light");
    });

    it("uses systemTheme when theme is system", () => {
        themeMock.theme = "system";
        themeMock.systemTheme = "dark";
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );

        expect(screen.getByTestId("icon-sun")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(setTheme).toHaveBeenCalledWith("light");
    });

    it("applies light text class on the dark-theme sun button", () => {
        themeMock.theme = "dark";
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );
        expect(screen.getByRole("button")).toHaveClass("text-text-dark");
    });

    it("applies dark text class on the light-theme moon button", () => {
        themeMock.theme = "light";
        render(
            <NavBar
                navigations={navigations}
                logo={logo}
                showThemeChange
            />
        );
        expect(screen.getByRole("button")).toHaveClass("text-text");
    });
});