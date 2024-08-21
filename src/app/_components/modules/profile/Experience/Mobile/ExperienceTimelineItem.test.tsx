import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { IJobInfo } from "@/app/_models/user";

describe("ExperienceTimelineItem", () => {
  const mockJobExperience: IJobInfo = {
    id: "1",
    CompanyName: "Company A",
    Position: "Developer",
    CompanyURL: "http://company-a.com",
    Tenure: "Jan 2020 - Dec 2021",
    BulletPoints: ["Developed features", "Improved performance"],
  };

  test("renders without crashing", () => {
    render(<ExperienceTimelineItem jobExperience={mockJobExperience} />);
    expect(screen.getByText("Company A --")).toBeInTheDocument();
  });

  test("displays the correct company name and position", () => {
    render(<ExperienceTimelineItem jobExperience={mockJobExperience} />);
    expect(screen.getByText("Company A --")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  test("displays the correct tenure", () => {
    render(<ExperienceTimelineItem jobExperience={mockJobExperience} />);
    expect(screen.getByText("Jan 2020 - Dec 2021")).toBeInTheDocument();
  });

  //   test('displays the bullet points correctly', () => {
  //     render(<ExperienceTimelineItem jobExperience={mockJobExperience} />);
  //     expect(screen.getByText('Developed features')).toBeInTheDocument();
  //     expect(screen.getByText('Improved performance')).toBeInTheDocument();
  //   });

  //   test('applies the correct styles to elements', () => {
  //     render(<ExperienceTimelineItem jobExperience={mockJobExperience} />);
  //     const container = screen.getByText('Company A --').closest('div');
  //     expect(container).toHaveClass('relative p-2 border-2');

  //     const textBox = screen.getByText('Company A').closest('div')?.parentElement;
  //     expect(textBox).toHaveClass('relative p-2 border-2');

  //     const arrow = screen.getByTestId('experience-arrow');
  //     expect(arrow).toHaveClass('absolute top-[10px] left-[-12px] z-[1] h-0 w-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-l-red-500');
  //   });
});
