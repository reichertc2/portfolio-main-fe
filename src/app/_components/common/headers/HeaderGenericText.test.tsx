import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderGenericText from "./HeaderGenericText";

describe("HeaderGenericText Component", () => {
  const text = "Test Header";

  test("renders without crashing", () => {
    render(<HeaderGenericText text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("displays the correct text", () => {
    render(<HeaderGenericText text={text} />);
    expect(screen.getByText(text)).toHaveTextContent(text);
  });
});
