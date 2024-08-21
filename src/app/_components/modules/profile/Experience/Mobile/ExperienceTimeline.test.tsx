import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { IJobInfo } from "@/app/_models/user";

// Mock the ExperienceTimelineItem component
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

  test("renders without crashing", () => {
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);
    expect(screen.getAllByTestId("timeline-item")).toHaveLength(
      mockJobExperience.length
    );
  });

//   test("applies the correct default styles to the container", () => {
//     render(<ExperienceTimeline jobExperience={mockJobExperience} />);
//     const container = screen.getByTestId("timeline-item").parentElement;
//     expect(container).toHaveClass("animate-moveline");
//   });

  test("renders the correct number of ExperienceTimelineItem components", () => {
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);
    expect(screen.getAllByTestId("timeline-item")).toHaveLength(
      mockJobExperience.length
    );
  });

  test("passes the correct jobExperience prop to ExperienceTimelineItem", () => {
    render(<ExperienceTimeline jobExperience={mockJobExperience} />);

    // Assert that the ExperienceTimelineItem was called with the correct props
    mockJobExperience.forEach((experience, index) => {
      expect(ExperienceTimelineItem).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({ jobExperience: experience }),
        {}
      );
    });
  });

//   test("assigns unique keys to each ExperienceTimelineItem based on Tenure", () => {
//     render(<ExperienceTimeline jobExperience={mockJobExperience} />);
//     const items = screen.getAllByTestId("timeline-item");
//     items.forEach((item, index) => {
//       expect(item).toHaveAttribute("key", mockJobExperience[index].Tenure);
//     });
//   });
});
