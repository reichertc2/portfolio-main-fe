import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMeStandardView from "./AboutMeStandardView";
import SummaryBio from "./Standard/SummaryBio";
import Skills from "./Standard/Skills";
import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

jest.mock("./Standard/SummaryBio");
jest.mock("./Standard/Skills");
jest.mock("next/image", () => {
  const MockedImage = (props: any) => {
    return (
        <img
            {...props}
            alt={props.alt || "mocked-alt"}
            width={props.width || "500"}
            height={props.height || "500"}
        />
    );
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

describe("AboutMeStandardView", () => {
  const aboutMe: IAboutMe = {
    elevator: ["This is a sample bio"],
    profileImage: "/path/to/profileImage.jpg",
    languages: [],
    tools: [],
  };

  const theme: IStyles = {
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

  beforeEach(() => {
    jest.clearAllMocks();
    (SummaryBio as jest.Mock).mockImplementation(() => (
        <div>Mocked SummaryBio</div>
    ));
    (Skills as jest.Mock).mockImplementation(() => <div>Mocked Skills</div>);
  });

  test("renders without crashing", () => {
    const { container } = render(
        <AboutMeStandardView aboutMe={aboutMe} theme={theme} />
    );
    expect(container).toBeInTheDocument();
  });

  test("renders the SummaryBio component with correct props", () => {
    render(<AboutMeStandardView aboutMe={aboutMe} theme={theme} />);

    expect(SummaryBio).toHaveBeenCalledWith(
        expect.objectContaining({
          elevator: aboutMe.elevator,
          theme,
        }),
        undefined
    );
  });

  test("renders the Image component with the correct src and alt attributes", () => {
    render(<AboutMeStandardView aboutMe={aboutMe} theme={theme} />);
    const image = screen.getByAltText("profileImage");
    expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(aboutMe.profileImage)
    );
    expect(image).toHaveAttribute("alt", "profileImage");
  });

  test("renders the Skills component with correct props", () => {
    render(<AboutMeStandardView aboutMe={aboutMe} theme={theme} />);

    expect(Skills).toHaveBeenCalledWith(
        expect.objectContaining({
          aboutMe,
          theme,
        }),
        undefined
    );
  });
});