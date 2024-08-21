import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ListBlock from "./ListBlock";
import { IStyles } from "@/app/_models/styles";
import "@testing-library/jest-dom/extend-expect";

describe("ListBlock", () => {
  const mockTheme: IStyles = {
    backgrounds: {
      light: "bg-white",
      dark: "bg-black",
    },
    texts: {
      light: "",
      dark: "",
      headerLight: "",
      headerDark: "",
    },
  };

  const defaultProps = {
    title: "Skills",
    listProps: ["JavaScript", "React", "CSS"],
    orientation: "vertical",
    theme: mockTheme,
  };

  test("renders the ListBlock component with default vertical orientation", () => {
    render(<ListBlock {...defaultProps} />);

    expect(screen.getByText("Skills:")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();

    const ulElement = screen.getByRole("list");
    expect(ulElement).toHaveClass("inline-block pr-3 text-sm md:w-3/5");
  });

//   test("applies horizontal styles when orientation is not vertical", () => {
//     const horizontalProps = { ...defaultProps, orientation: "horizontal" };
//     render(<ListBlock {...horizontalProps} />);

//     const ulElement = screen.getByRole("list");
//     expect(ulElement).toHaveClass("dark:text-slate-200 inline-block pr-3 text-sm md:w-3/5");

//     const liTitleElement = screen.getByText("Skills:");
//     expect(liTitleElement).toHaveClass("text-semibold pb-1");

//     const listItems = screen.getAllByRole("listitem");
//     listItems.forEach((item) => {
//       expect(item).toHaveClass("img-li pl-5 list-inside italic");
//     });
//   });

  test("renders FontAwesomeIcon with each list item", () => {
    render(<ListBlock {...defaultProps} />);

    const icons = screen.getAllByTestId("fa-icon");
    expect(icons.length).toBe(defaultProps.listProps.length);
  });
});
