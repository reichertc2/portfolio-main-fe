import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuList from "@mui/material/MenuList";
import ProfileLinkMenuItem from "./ProfileLinkMenuItem";

describe("ProfileLinkMenuItem Component", () => {
  const url = "/profile";
  const text = "Profile";
  const handleCloseUserMenu = jest.fn();

  const renderItem = () =>
      render(
          <MenuList>
            <ProfileLinkMenuItem
                url={url}
                text={text}
                handleCloseUserMenu={handleCloseUserMenu}
            />
          </MenuList>
      );

  beforeEach(() => {
    handleCloseUserMenu.mockClear();
  });

  test("renders without crashing", () => {
    renderItem();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("calls handleCloseUserMenu when MenuItem is clicked", () => {
    renderItem();
    fireEvent.click(screen.getByRole("menuitem"));
    expect(handleCloseUserMenu).toHaveBeenCalled();
  });

  test("renders the correct URL in the Link component", () => {
    renderItem();
    expect(screen.getByRole("link", { name: text })).toHaveAttribute(
        "href",
        url
    );
  });

  test("renders the correct text within Typography", () => {
    renderItem();
    const typographyElement = screen.getByText(text);
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent(text);
  });
});