import React from "react";
import { render } from "@testing-library/react";
import ParagraphText from "./ParagraphText";

describe("ParagraphText Tests", () => {
  test("renders text", () => {


    const { getByText } = render(
      <ParagraphText text="Help"  />
    );

    const paragraphElement = getByText("Help");
    expect(paragraphElement).toBeInTheDocument();
  });
});
