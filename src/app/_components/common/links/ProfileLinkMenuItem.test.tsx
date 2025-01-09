import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import for jest-dom matchers
import ProfileLinkMenuItem from "./ProfileLinkMenuItem";

describe("ProfileLinkMenuItem Component", () => {
  const url = "/profile";
  const text = "Profile";
  const handleCloseUserMenu = jest.fn();

  test("renders without crashing", () => {
    render(<ProfileLinkMenuItem url={url} text={text} handleCloseUserMenu={handleCloseUserMenu} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("calls handleCloseUserMenu when MenuItem is clicked", () => {
    render(<ProfileLinkMenuItem url={url} text={text} handleCloseUserMenu={handleCloseUserMenu} />);
    fireEvent.click(screen.getByText(text).closest("li")!);
    expect(handleCloseUserMenu).toHaveBeenCalled();
  });

  test("renders the correct URL in the Link component", () => {
    render(<ProfileLinkMenuItem url={url} text={text} handleCloseUserMenu={handleCloseUserMenu} />);
    const linkElement = screen.getByText(text).closest("a");
    expect(linkElement).toHaveAttribute("href", url);
  });

  test("renders the correct text within Typography", () => {
    render(<ProfileLinkMenuItem url={url} text={text} handleCloseUserMenu={handleCloseUserMenu} />);
    const typographyElement = screen.getByText(text);
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent(text);
  });
});
