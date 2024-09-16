import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProjectInfoDescription } from "./ProjectInfoDescription";

describe("ProjectInfoDescription component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(
      <ProjectInfoDescription description="Test description" />
    );
    expect(getByText("Test description")).toBeInTheDocument();
  });

  test("renders the description text correctly", () => {
    const testDescription = "This is a project description";
    const { getByText } = render(
      <ProjectInfoDescription description={testDescription} />
    );
    expect(getByText(testDescription)).toBeInTheDocument();
  });
});
