import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render } from "@testing-library/react";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "./ProfileSection";

describe("ProfileSection Tests", () => {
  test("renders Title", () => {
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
      <ProfileSection title="Help" theme={MockTheme} id={"Test_id"}>
        <p>Test</p>
      </ProfileSection>
    );

    const element = getByText("Help");
    expect(element).toBeInTheDocument();
  });

  // test("renders without title", () => {
  //   const MockTheme: IStyles = {
  //     texts: {
  //       light: "",
  //       dark: "",
  //       headerLight: "",
  //       headerDark: "",
  //     },
  //     backgrounds: {
  //       light: "",
  //       dark: "",
  //     },
  //   };

  //   const { getByTestId } = render(
  //     <ProfileSection theme={MockTheme} id={"Test_id"} children={undefined} />
  //   );

  //   const paragraphElement = getByTestId("Test_id");
  //   expect(paragraphElement).toBeInTheDocument();
  // });
});
