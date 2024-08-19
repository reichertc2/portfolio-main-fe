import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SummaryBio } from "./SummaryBio"; // Adjust the import path as necessary
import { IStyles } from "@/app/_models/styles";

// Mock the ParagraphText component
jest.mock("../../../../common/Standard/ParagraphText", () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => <div>{text}</div>,
}));

// Mock data for testing
const mockTheme: IStyles = {
  backgrounds: {
    light: "bg-white",
    dark: "bg-black",
  },
  texts: {
    light: "",
    dark: "",
    headerLight: "",
    headerDark: "",
  },
};

const mockElevator = [
  "First summary point",
  "Second summary point",
  "Third summary point",
];

describe("SummaryBio component", () => {
  test("renders the correct number of ParagraphText components", () => {
    render(<SummaryBio elevator={mockElevator} theme={mockTheme} />);

    const paragraphs = screen.getAllByText(/summary point/i);
    expect(paragraphs).toHaveLength(mockElevator.length);
  });

  test("passes the correct text to each ParagraphText component", () => {
    render(<SummaryBio elevator={mockElevator} theme={mockTheme} />);

    mockElevator.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  //   test("applies the correct styles to the container", () => {
  //     render(<SummaryBio elevator={mockElevator} theme={mockTheme} />);

  //     const container = screen.getByRole("presentation").parentElement;
  //     expect(container).toHaveClass("w-50");
  //   });

  //   test("applies the correct styles to the containerStandard div", () => {
  //     render(<SummaryBio elevator={mockElevator} theme={mockTheme} />);

  //     const containerStandard = screen.getByRole("presentation");
  //     expect(containerStandard).toHaveClass("hidden sm:flex flex-col");
  //   });

  test("renders correctly with an empty elevator array", () => {
    render(<SummaryBio elevator={[]} theme={mockTheme} />);

    const paragraphs = screen.queryAllByText(/summary point/i);
    expect(paragraphs).toHaveLength(0);
  });

  test("handles large number of elevator points correctly", () => {
    const largeMockElevator = Array.from(
      { length: 100 },
      (_, i) => `Summary point ${i}`
    );
    render(<SummaryBio elevator={largeMockElevator} theme={mockTheme} />);

    largeMockElevator.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
