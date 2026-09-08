import React from "react";
import { render } from "@testing-library/react";
import ParagraphTextMobile from "./ParagraphTextMobile";

describe("ParagraphTextMobile Tests", () => {
  test("renders text", () => {


    const { getByText } = render(
      <ParagraphTextMobile text="Help"  />
    );

    const paragraphElement = getByText("Help");
    expect(paragraphElement).toBeInTheDocument();
  });
});
