import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TabSelectorButtons } from "./TabSelectorButtons"; // Adjust the import path as necessary
import { IJobInfo } from "@/app/_models/user";

// Mock data for testing
const mockJobExperience: IJobInfo[] = [
  {
    id: "1",
    CompanyName: "Company A",
    Position: "Software Engineer",
    CompanyURL: "https://companya.com",
    Tenure: "Jan 2020 - Present",
    BulletPoints: [
      "Developed and maintained web applications",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    id: "2",
    CompanyName: "Company B",
    Position: "Frontend Developer",
    CompanyURL: "https://companyb.com",
    Tenure: "Mar 2018 - Dec 2019",
    BulletPoints: [
      "Led the redesign of the company's main website",
      "Optimized web applications for performance",
    ],
  },
];
const mockOpenExperience = jest.fn();

describe("TabSelectorButtons component", () => {
  beforeEach(() => {
    mockOpenExperience.mockClear();
  });

  test("renders without crashing", () => {
    render(
      <TabSelectorButtons
        jobExperience={mockJobExperience}
        openExperience={mockOpenExperience}
        companyInBodyId={""}
      />
    );
    expect(
      screen.getByRole("button", { name: /Company A/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Company B/i })
    ).toBeInTheDocument();
  });

  test("applies the correct styling to the tab container", () => {
    render(
      <TabSelectorButtons
        jobExperience={mockJobExperience}
        openExperience={mockOpenExperience}
        companyInBodyId={""}
      />
    );
    const tabContainer = screen
      .getByRole("button", { name: /Company A/i })
      .closest("div");
    expect(tabContainer).toHaveClass("w-1/5 inline-block");
  });

  test("calls openExperience with the correct id when a button is clicked", () => {
    render(
      <TabSelectorButtons
        jobExperience={mockJobExperience}
        openExperience={mockOpenExperience}
        companyInBodyId={""}
      />
    );
    const buttonA = screen.getByRole("button", { name: /Company A/i });
    fireEvent.click(buttonA);
    expect(mockOpenExperience).toHaveBeenCalledWith("1");

    const buttonB = screen.getByRole("button", { name: /Company B/i });
    fireEvent.click(buttonB);
    expect(mockOpenExperience).toHaveBeenCalledWith("2");
  });

  test("renders the correct number of buttons", () => {
    render(
      <TabSelectorButtons
        jobExperience={mockJobExperience}
        openExperience={mockOpenExperience}
        companyInBodyId={""}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(mockJobExperience.length);
  });

  test("renders correctly when jobExperience is empty", () => {
    render(
      <TabSelectorButtons
        jobExperience={[]}
        openExperience={mockOpenExperience}
        companyInBodyId={""}
      />
    );
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(0);
  });
});
