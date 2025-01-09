import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLinkText from "./HeaderLinkText";

jest.mock("../headers/HeaderLogoText", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="header-logo-text">{props.text}</div>,
}));

describe("HeaderLinkText Component", () => {
  const url = "/test-url";
  const urlText = "Test Link";

  test("renders without crashing", () => {
    render(<HeaderLinkText url={url} urlText={urlText} />);
    expect(screen.getByText(urlText)).toBeInTheDocument();
  });

  test("renders the correct URL in the Link component", () => {
    render(<HeaderLinkText url={url} urlText={urlText} />);
    const linkElement = screen.getByText(urlText).closest("a");
    expect(linkElement).toHaveAttribute("href", url);
  });

  test("renders the correct text within HeaderLogoText", () => {
    render(<HeaderLinkText url={url} urlText={urlText} />);
    expect(screen.getByTestId("header-logo-text")).toHaveTextContent(`${urlText}`);
  });
});
