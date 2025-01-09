import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLogoText from "./HeaderLogoText";

describe("HeaderLogoText Component", () => {
  const text = "Logo Text";

  test("renders without crashing", () => {
    render(<HeaderLogoText text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("displays the correct text", () => {
    render(<HeaderLogoText text={text} />);
    expect(screen.getByText(text)).toHaveTextContent(text);
  });
});
