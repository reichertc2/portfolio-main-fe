import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render } from "@testing-library/react";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "./ProfileSection";
import UnderConstruction from "./UnderConstruction";

describe("UnderConstruction Tests", () => {
  test("renders element", () => {
    const MockTheme: IStyles = {
      texts: {
        light: "",
        dark: "",
        headerLight: "",
        headerDark: "",
      },
      backgrounds: {
        light: "",
        dark: "",
      },
    };

    const { getByText } = render(<UnderConstruction />);

    const element = getByText("Under Construction. Come Back Soon!!");
    expect(element).toBeInTheDocument();
  });
});
