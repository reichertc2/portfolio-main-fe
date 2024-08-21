import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from "@testing-library/react";
import  MoreButton  from "./MoreButton";

describe("MoreButton Component", () => {
  test("renders the button with the correct text", () => {
    render(<MoreButton setMoreButton={jest.fn()} moreButton={false} />);
    const buttonElement = screen.getByText(/Would you like to know more?/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls setMoreButton with false when clicked", () => {
    const setMoreButtonMock = jest.fn();
    render(<MoreButton setMoreButton={setMoreButtonMock} moreButton={false} />);
    const buttonElement = screen.getByText(/Would you like to know more?/i);

    fireEvent.click(buttonElement);

    expect(setMoreButtonMock).toHaveBeenCalledWith(false);
  });
});
