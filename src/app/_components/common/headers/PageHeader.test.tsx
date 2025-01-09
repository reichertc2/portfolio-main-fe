import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeader from "./PageHeader";

describe("PageHeader Component", () => {
  const title = "Page Title";

  test("renders without crashing", () => {
    render(<PageHeader title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("displays the correct title text", () => {
    render(<PageHeader title={title} />);
    expect(screen.getByText(title)).toHaveTextContent(title);
  });
});
