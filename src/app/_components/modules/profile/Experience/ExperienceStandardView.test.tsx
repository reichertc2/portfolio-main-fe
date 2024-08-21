import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExperienceStandardView from "./ExperienceStandardView";
import TabSelector from "./Standard/TabSelector";
import { IJobInfo } from "@/app/_models/user";

// Mock the TabSelector component
jest.mock("./Standard/TabSelector", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="tab-selector" />),
}));

describe("ExperienceStandardView", () => {
  const mockJobExperience: IJobInfo[] = [
    {
      id: "1",
      CompanyName: "Company A",
      Position: "Developer",
      CompanyURL: "http://company-a.com",
      Tenure: "Jan 2020 - Dec 2021",
      BulletPoints: ["Developed features", "Improved performance"],
    },
    {
      id: "2",
      CompanyName: "Company B",
      Position: "Senior Developer",
      CompanyURL: "http://company-b.com",
      Tenure: "Jan 2022 - Present",
      BulletPoints: ["Led projects", "Mentored junior developers"],
    },
  ];

  test("renders without crashing", () => {
    render(<ExperienceStandardView jobExperience={mockJobExperience} />);
    expect(screen.getByTestId("tab-selector")).toBeInTheDocument();
  });

  test("applies the correct default styles to the container", () => {
    render(<ExperienceStandardView jobExperience={mockJobExperience} />);
    const container = screen.getByTestId("tab-selector").parentElement;
    expect(container).toHaveClass(
      "hidden sm:block border-gray-200 border-2 border-solid w-full"
    );
  });

  test("passes the correct jobExperience prop to TabSelector", () => {
    render(<ExperienceStandardView jobExperience={mockJobExperience} />);

    // Assert that the TabSelector was called with the correct props
    expect(TabSelector).toHaveBeenCalledWith(
      expect.objectContaining({ jobExperience: mockJobExperience }),
      {}
    );
  });
});
