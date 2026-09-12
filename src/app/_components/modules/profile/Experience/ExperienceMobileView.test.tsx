import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceMobileView from "./ExperienceMobileView";
import ExperienceTimeline from "./Mobile/ExperienceTimeline";
import { IJobInfo } from "@/app/_models/user";

jest.mock("./Mobile/ExperienceTimeline", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="experience-timeline" />),
}));

describe("ExperienceMobileView", () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<ExperienceMobileView jobExperience={mockJobExperience} />);
    expect(screen.getByTestId("experience-timeline")).toBeInTheDocument();
  });

  test("applies the correct default styles to the container", () => {
    render(<ExperienceMobileView jobExperience={mockJobExperience} />);
    const container = screen.getByTestId("experience-timeline").parentElement;
    expect(container).toHaveClass("sm:hidden sm:flex");
  });

  test("passes the correct jobExperience prop to ExperienceTimeline", () => {
    render(<ExperienceMobileView jobExperience={mockJobExperience} />);

    expect(ExperienceTimeline).toHaveBeenCalledWith(
        expect.objectContaining({ jobExperience: mockJobExperience }),
        undefined
    );
  });
});