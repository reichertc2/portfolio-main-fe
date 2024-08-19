import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThreeQuarterView } from "./ThreeQuarterView"; // Adjust the import path as necessary

describe("ThreeQuarterView component", () => {
  test("renders children correctly", () => {
    render(
      <ThreeQuarterView>
        <p>Test Child</p>
      </ThreeQuarterView>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  test("applies the correct styling when divider is true", () => {
    render(
      <ThreeQuarterView divider={true}>
        <p>Test Child with Divider</p>
      </ThreeQuarterView>
    );

    const innerContainer = screen.getByText(
      "Test Child with Divider"
    ).parentElement;
    expect(innerContainer).toHaveClass(
      "flex flex-wrap pt-4 pb-8 md:w-3/4 w-full border-zinc-300 border-solid border-t-2"
    );
  });

  test("applies the correct styling when divider is false", () => {
    render(
      <ThreeQuarterView divider={false}>
        <p>Test Child without Divider</p>
      </ThreeQuarterView>
    );

    const innerContainer = screen.getByText(
      "Test Child without Divider"
    ).parentElement;
    expect(innerContainer).toHaveClass("flex flex-wrap py-8 md:w-3/4 w-full");
  });

  test("applies the correct styling when divider is undefined", () => {
    render(
      <ThreeQuarterView>
        <p>Test Child without Divider (default)</p>
      </ThreeQuarterView>
    );

    const innerContainer = screen.getByText(
      "Test Child without Divider (default)"
    ).parentElement;
    expect(innerContainer).toHaveClass("flex flex-wrap py-8 md:w-3/4 w-full");
  });

  test("outer container has the correct class", () => {
    render(
      <ThreeQuarterView>
        <p>Test Outer Container</p>
      </ThreeQuarterView>
    );

    const outerContainer = screen.getByText("Test Outer Container")
      .parentElement?.parentElement;
    expect(outerContainer).toHaveClass("flex justify-center");
  });
});
