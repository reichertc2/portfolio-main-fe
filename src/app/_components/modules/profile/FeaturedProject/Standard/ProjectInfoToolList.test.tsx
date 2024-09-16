import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProjectInfoToolList } from "./ProjectInfoToolList";

describe("ProjectInfoToolList component", () => {
  const mockToolList = ["React", "TypeScript", "Tailwind CSS"];

  test("renders without crashing", () => {
    const { getByText } = render(
      <ProjectInfoToolList toolList={mockToolList} />
    );
    mockToolList.forEach((tool) => {
      expect(getByText(tool)).toBeInTheDocument();
    });
  });

  test("renders the correct number of tools", () => {
    const { container } = render(
      <ProjectInfoToolList toolList={mockToolList} />
    );
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(mockToolList.length);
  });

  test("renders the tools text correctly", () => {
    const { getByText } = render(
      <ProjectInfoToolList toolList={mockToolList} />
    );
    mockToolList.forEach((tool) => {
      expect(getByText(tool)).toHaveTextContent(tool);
    });
  });
});
