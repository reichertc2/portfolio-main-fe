import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { IAboutMe } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import AboutMeMobileView from "./AboutMeMobileView";

// Mocking the child components used in AboutMeMobileView
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

jest.mock("./Mobile/SummaryBioMobile", () => ({
  SummaryBioMobile: ({ elevator, theme, moreButton, setMoreButton }: any) => (
    <div>
      <p>{elevator}</p>
      <button onClick={() => setMoreButton(!moreButton)}>Toggle</button>
    </div>
  ),
}));
jest.mock("./ListBlock", () => ({
  __esModule: true,
  default: ({ title, listProps }: any) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {listProps.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ),
}));

describe("AboutMeMobileView", () => {
  const mockAboutMe: IAboutMe = {
    profileImage: "/profile.jpg",
    elevator: ["A brief introduction"],
    languages: ["JavaScript", "Python"],
    tools: ["VS Code", "Git"],
  };

  const mockTheme: IStyles = {
    backgrounds: {
      light: "bg-white",
      dark: "bg-black",
    },
    texts: {
      light: "",
      dark: "",
      headerLight: "",
      headerDark: "",
    },
  };

  test("renders the component with the given props", () => {
    render(<AboutMeMobileView aboutMe={mockAboutMe} theme={mockTheme} />);

    expect(screen.getByAltText("profileImage")).toBeInTheDocument();
    expect(screen.getByText("A brief introduction")).toBeInTheDocument();
  });

  test("toggles the moreButton state and shows/hides the ListBlock components", () => {
    render(<AboutMeMobileView aboutMe={mockAboutMe} theme={mockTheme} />);

    const toggleButton = screen.getByText("Toggle");

    // Initial state: moreButton is true, ListBlock components should not be visible
    expect(screen.queryByText("Languages")).not.toBeInTheDocument();
    expect(screen.queryByText("Tools")).not.toBeInTheDocument();

    // Toggle the moreButton state to false
    fireEvent.click(toggleButton);

    // Now the ListBlock components should be visible
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();

    // Toggle the moreButton state back to true
    fireEvent.click(toggleButton);

    // ListBlock components should be hidden again
    expect(screen.queryByText("Languages")).not.toBeInTheDocument();
    expect(screen.queryByText("Tools")).not.toBeInTheDocument();
  });
});
