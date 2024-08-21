import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeadlineMobileView from "./HeadlineMobileView";
import { IProfile } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

describe("HeadlineMobileView", () => {
  const mockProfile: IProfile = {
    name: "John Doe",
    headline: "Full Stack Developer",
    profileURL: "",
    logo: undefined,
  };

  const mockTheme: IStyles = {
    texts: {
      light: "",
      dark: "",
      headerLight: "",
      headerDark: "",
    },
    backgrounds: {
      light: "",
      dark: "",
    },
  };

  test("renders without crashing", () => {
    render(<HeadlineMobileView headLine={mockProfile} theme={mockTheme} />);
    expect(screen.getByText(mockProfile.name)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.headline)).toBeInTheDocument();
  });

  test("applies the correct default styles to the container", () => {
    render(<HeadlineMobileView headLine={mockProfile} theme={mockTheme} />);
    const container = screen.getByText(mockProfile.name).parentElement;
    expect(container).toHaveClass("sm:hidden block");
  });

  test("applies the correct default styles to the main headline", () => {
    render(<HeadlineMobileView headLine={mockProfile} theme={mockTheme} />);
    const mainHeadline = screen.getByText(mockProfile.name);
    expect(mainHeadline).toHaveClass(
      "dark:text-stone-100 text-xl font-semibold py-1"
    );
  });

  test("applies the correct default styles to the sub headline", () => {
    render(<HeadlineMobileView headLine={mockProfile} theme={mockTheme} />);
    const subHeadline = screen.getByText(mockProfile.headline);
    expect(subHeadline).toHaveClass(
      "dark:text-sky-200 text-sm font-semibold italic pb-3 opacity-70"
    );
  });


});
