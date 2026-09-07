import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { IJobInfo } from "@/app/_models/user";

jest.mock("./ExperienceTimelineItem", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="timeline-item" />),
}));

describe("ExperienceTimeline", () => {
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
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);
    expect(screen.getAllByTestId("timeline-item")).toHaveLength(
        mockJobExperience.length
    );
  });

  test("renders the correct number of ExperienceTimelineItem components", () => {
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);
    expect(screen.getAllByTestId("timeline-item")).toHaveLength(
        mockJobExperience.length
    );
  });

  test("passes the correct jobExperience prop to ExperienceTimelineItem", () => {
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);

    mockJobExperience.forEach((experience) => {
      expect(ExperienceTimelineItem).toHaveBeenCalledWith(
          expect.objectContaining({ jobExperience: experience }),
          undefined
      );
    });
  });
});