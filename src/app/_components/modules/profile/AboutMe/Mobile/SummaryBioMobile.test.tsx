import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryBioMobile from "./SummaryBioMobile"; // Adjust the import path as necessary



describe("SummaryBioMobile component", () => {
  const mockElevator = [
    "Passionate developer with a focus on front-end technologies.",
    "Experienced in building scalable and responsive web applications.",
    "Dedicated to continuous learning and improvement.",
  ];

  //   test("renders the correct number of ParagraphTextMobile components", () => {
  //     render(<SummaryBioMobile elevator={mockElevator}  />);

  //     const paragraphElements = screen.getAllByRole("paragraph");
  //     expect(paragraphElements).toHaveLength(mockElevator.length);
  //   });

  test("displays each elevator pitch text correctly", () => {
    render(<SummaryBioMobile elevator={mockElevator}  moreButton={false} setMoreButton={function (click: boolean): void {
      throw new Error("Function not implemented.");
    } } />);

    mockElevator.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  //   test("applies the correct styles to the container", () => {
  //     render(<SummaryBioMobile elevator={mockElevator}  />);

  //     const containerElement = screen.getByRole("presentation").firstChild;
  //     expect(containerElement).toHaveClass("w-50 sm:hidden");
  //   });

  test("renders correctly with an empty elevator array", () => {
    render(<SummaryBioMobile elevator={[]}  moreButton={false} setMoreButton={function (click: boolean): void {
      throw new Error("Function not implemented.");
    } } />);

    const paragraphElements = screen.queryAllByRole("paragraph");
    expect(paragraphElements).toHaveLength(0);
  });

  //   test("handles large text input gracefully", () => {
  //     const longText =
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  //     const longElevator = Array(5).fill(longText);
  //     render(<SummaryBioMobile elevator={longElevator}  />);

  //     longElevator.forEach((text) => {
  //       expect(screen.getByText(text)).toBeInTheDocument();
  //     });
  //   });

  //   test("renders correctly with different theme properties", () => {

  //     render(<SummaryBioMobile elevator={mockElevator}  />);

  //     mockElevator.forEach((text) => {
  //       const paragraphElement = screen.getByText(text);
  //       expect(paragraphElement).toBeInTheDocument();
  //       expect(paragraphElement).toHaveClass(customTheme.textColors.primary);
  //     });
  //   });
});
