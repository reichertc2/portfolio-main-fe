import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { IStyles } from "@/app/_models/styles";
import ParagraphTextMobile from "./ParagraphTextMobile";

describe("ParagraphTextMobile Tests", () => {
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
      <ParagraphTextMobile text="Help" theme={MockTheme} />
    );

    const paragraphElement = getByText("Help");
    expect(paragraphElement).toBeInTheDocument();
  });
});
