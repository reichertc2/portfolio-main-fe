import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { IStyles } from "@/app/_models/styles";
import BasicSectionHeader from "./BasicSectionHeader";

describe("BasicSectionHeader Tests", () => {
  test("renders text", () => {
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

    const { getByText } = render(
      <BasicSectionHeader headerTitle="Help" theme={MockTheme} />
    );

    const headerElement = getByText("Help");
    expect(headerElement).toBeInTheDocument();
  });
});
