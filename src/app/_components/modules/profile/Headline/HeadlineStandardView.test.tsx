import React from "react";
import { render, screen } from "@testing-library/react";
import HeadlineStandardView from "./HeadlineStandardView";
import { IProfile } from "@/app/_models/user";

describe("HeadlineStandardView", () => {
  const mockProfile: IProfile = {
    name: "Jane Doe",
    headline: "Senior Software Engineer",
    profileURL: "",
  };

  test("renders without crashing", () => {
    render(<HeadlineStandardView headLine={mockProfile}  />);
    expect(screen.getByText(mockProfile.name)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.headline)).toBeInTheDocument();
  });

  test("applies the correct default styles to the container", () => {
    render(<HeadlineStandardView headLine={mockProfile}  />);
    const container = screen.getByText(mockProfile.name).parentElement;
    expect(container).toHaveClass("hidden md:block");
  });

  test("applies the correct default styles to the main headline", () => {
    render(<HeadlineStandardView headLine={mockProfile}  />);
    const mainHeadline = screen.getByText(mockProfile.name);
    expect(mainHeadline).toHaveClass(
      "dark:text-stone-100 text-7xl font-semibold py-1"
    );
  });

  test("applies the correct default styles to the sub headline", () => {
    render(<HeadlineStandardView headLine={mockProfile}  />);
    const subHeadline = screen.getByText(mockProfile.headline);
    expect(subHeadline).toHaveClass(
      "dark:text-sky-200 text-5xl font-semibold italic pt-1 pb-3 opacity-70"
    );
  });
});
