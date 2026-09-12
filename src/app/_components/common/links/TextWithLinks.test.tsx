import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import for jest-dom matchers
import TextWithLink from "./TextWithLinks";
import { LinkText } from "./LinkText";

// Mock the LinkText component to isolate testing
jest.mock("./LinkText", () => ({
  __esModule: true,
  LinkText: (props: any) => <a href={props.url}>{props.urlText}</a>,
}));

describe("TextWithLink Component", () => {
  const text = "Here is a link:";
  const url = "/test-url";
  const urlText = "Click Here";

  // test("renders without crashing", () => {
  //   render(<TextWithLink text={text} url={url} urlText={urlText} />);
  //   expect(screen.getByText(text)).toBeInTheDocument();
  //   expect(screen.getByText(urlText)).toBeInTheDocument();
  // });

  test("renders the correct URL in the LinkText component", () => {
    render(<TextWithLink text={text} url={url} urlText={urlText} />);
    const linkElement = screen.getByText(urlText).closest("a");
    expect(linkElement).toHaveAttribute("href", url);
  });

  // test("renders the correct text with the link", () => {
  //   render(<TextWithLink text={text} url={url} urlText={urlText} />);
  //   expect(screen.getByText(text)).toBeInTheDocument();
  //   expect(screen.getByText(urlText)).toHaveTextContent(urlText);
  // });

  // test("applies correct text alignment", () => {
  //   render(<TextWithLink text={text} url={url} urlText={urlText} />);
  //   const paragraphElement = screen.getByText(text).closest("p");
  //   expect(paragraphElement).toHaveStyle("text-align: right");
  // });
});
