import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProjectInfoHeader } from "./ProjectInfoHeader";

describe("ProjectInfoHeader component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(<ProjectInfoHeader title="Test Title" />);
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  test("renders the title text correctly", () => {
    const testTitle = "Project Header Title";
    const { getByText } = render(<ProjectInfoHeader title={testTitle} />);
    expect(getByText(testTitle)).toBeInTheDocument();
  });
});
