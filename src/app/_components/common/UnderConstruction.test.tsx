import React from "react";
import { getByTestId, render } from "@testing-library/react";
import ProfileSection from "./ProfileSection";
import UnderConstruction from "./UnderConstruction";

describe("UnderConstruction Tests", () => {
  test("renders element", () => {


    const { getByText } = render(<UnderConstruction />);

    const element = getByText("Under Construction. Come Back Soon!!");
    expect(element).toBeInTheDocument();
  });
});
