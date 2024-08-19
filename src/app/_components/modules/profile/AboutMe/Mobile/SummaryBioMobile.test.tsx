import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SummaryBioMobile from "./SummaryBioMobile"; // Adjust the import path as necessary
import { IStyles } from "@/app/_models/styles";

// Mock data for testing
const mockTheme: IStyles = {
  backgrounds: {
    light: "bg-white",
    dark: "bg-black",
  },
  texts: {
    light: "text-primary",
    dark: "text-secondary",
    headerLight: "",
    headerDark: "",
  },
  // Add other properties as needed
};

describe("SummaryBioMobile component", () => {
  const mockElevator = [
    "Passionate developer with a focus on front-end technologies.",
    "Experienced in building scalable and responsive web applications.",
    "Dedicated to continuous learning and improvement.",
  ];

  //   test("renders the correct number of ParagraphTextMobile components", () => {
  //     render(<SummaryBioMobile elevator={mockElevator} theme={mockTheme} />);

  //     const paragraphElements = screen.getAllByRole("paragraph");
  //     expect(paragraphElements).toHaveLength(mockElevator.length);
  //   });

  test("displays each elevator pitch text correctly", () => {
    render(<SummaryBioMobile elevator={mockElevator} theme={mockTheme} />);

    mockElevator.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  //   test("applies the correct styles to the container", () => {
  //     render(<SummaryBioMobile elevator={mockElevator} theme={mockTheme} />);

  //     const containerElement = screen.getByRole("presentation").firstChild;
  //     expect(containerElement).toHaveClass("w-50 sm:hidden");
  //   });

  test("renders correctly with an empty elevator array", () => {
    render(<SummaryBioMobile elevator={[]} theme={mockTheme} />);

    const paragraphElements = screen.queryAllByRole("paragraph");
    expect(paragraphElements).toHaveLength(0);
  });

  //   test("handles large text input gracefully", () => {
  //     const longText =
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  //     const longElevator = Array(5).fill(longText);
  //     render(<SummaryBioMobile elevator={longElevator} theme={mockTheme} />);

  //     longElevator.forEach((text) => {
  //       expect(screen.getByText(text)).toBeInTheDocument();
  //     });
  //   });

  //   test("renders correctly with different theme properties", () => {
  //     const customTheme: IStyles = {
  //       ...mockTheme,
  //       textColors: {
  //         primary: "text-custom-primary",
  //         secondary: "text-custom-secondary",
  //       },
  //     };
  //     render(<SummaryBioMobile elevator={mockElevator} theme={customTheme} />);

  //     mockElevator.forEach((text) => {
  //       const paragraphElement = screen.getByText(text);
  //       expect(paragraphElement).toBeInTheDocument();
  //       expect(paragraphElement).toHaveClass(customTheme.textColors.primary);
  //     });
  //   });
});
