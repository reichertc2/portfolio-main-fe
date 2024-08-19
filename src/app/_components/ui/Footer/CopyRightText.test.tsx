import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CopyrightText } from "./CopyrightText"; // Adjust the import path as necessary
import * as dateUtils from "../../../_utilities/dateUtils"; // Import the utility for mocking

describe("CopyrightText component", () => {
  const mockYear = "2024"; // Example mock year

  beforeEach(() => {
    // Mock the getCurrentYear function to return the mockYear
    jest.spyOn(dateUtils, "getCurrentYear").mockReturnValue(mockYear);
  });

  afterEach(() => {
    // Restore the original implementation after each test
    jest.restoreAllMocks();
  });

  test("renders the provided text", () => {
    const testText = "My Company";
    render(<CopyrightText text={testText} />);

    expect(screen.getByText(`${testText} © ${mockYear}`)).toBeInTheDocument();
  });

  test("displays the correct current year", () => {
    const testText = "Another Company";
    render(<CopyrightText text={testText} />);

    expect(
      screen.getByText(`Another Company © ${mockYear}`)
    ).toBeInTheDocument();
  });

  test("applies the correct styles to the text container", () => {
    const testText = "Styled Company";
    render(<CopyrightText text={testText} />);

    const textContainer = screen.getByText(`${testText} © ${mockYear}`);
    expect(textContainer).toHaveClass("m-auto m-0 inline");
  });

  test("updates the year dynamically", () => {
    const testText = "Dynamic Year Company";
    jest.spyOn(dateUtils, "getCurrentYear").mockReturnValue("2025");

    render(<CopyrightText text={testText} />);

    expect(screen.getByText("Dynamic Year Company © 2025")).toBeInTheDocument();
  });
});
