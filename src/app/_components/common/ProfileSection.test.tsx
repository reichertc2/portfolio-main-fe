import React from "react";
import { getByTestId, render } from "@testing-library/react";
import ProfileSection from "./ProfileSection";

describe("ProfileSection Tests", () => {
  test("renders Title", () => {


    const { getByText } = render(
      <ProfileSection title="Help" id={"Test_id"}>
        <p>Test</p>
      </ProfileSection>
    );

    const element = getByText("Help");
    expect(element).toBeInTheDocument();
  });

  // test("renders without title", () => {


  //   const { getByTestId } = render(
  //     <ProfileSection id={"Test_id"} children={undefined} />
  //   );

  //   const paragraphElement = getByTestId("Test_id");
  //   expect(paragraphElement).toBeInTheDocument();
  // });
});
