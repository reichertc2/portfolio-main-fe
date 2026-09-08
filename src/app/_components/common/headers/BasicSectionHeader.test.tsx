import React from "react";
import { render } from "@testing-library/react";
import BasicSectionHeader from "./BasicSectionHeader";

describe("BasicSectionHeader Tests", () => {
  test("renders text", () => {

    const { getByText } = render(
      <BasicSectionHeader headerTitle="Help"  />
    );

    const headerElement = getByText("Help");
    expect(headerElement).toBeInTheDocument();
  });
});
