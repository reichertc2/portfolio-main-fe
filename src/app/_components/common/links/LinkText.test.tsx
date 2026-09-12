import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import for jest-dom matchers
import LinkText from "./LinkText";

describe("LinkText Component", () => {
  const url = "/test-url";
  const urlText = "Test Link";

  test("renders without crashing", () => {
    render(<LinkText url={url} urlText={urlText} />);
    expect(screen.getByText(urlText)).toBeInTheDocument();
  });

  test("renders the correct URL in the Link component", () => {
    render(<LinkText url={url} urlText={urlText} />);
    const linkElement = screen.getByText(urlText).closest("a");
    expect(linkElement).toHaveAttribute("href", url);
  });

  //   test("renders the correct text with leading space", () => {
  //     render(<LinkText url={url} urlText={urlText} />);
  //     expect(screen.getByText(` ${urlText}`)).toBeInTheDocument();
  //   });
});
