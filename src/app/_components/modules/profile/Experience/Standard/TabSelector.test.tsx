import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TabSelector } from "./TabSelector"; // Adjust the import path as necessary
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import TabSelectorButtons from "./TabSelectorButtons";
import TabSelectorBody from "./TabSelectorBody";

// Mock the TabSelectorButtons and TabSelectorBody components
jest.mock("./TabSelectorButtons", () => ({
  __esModule: true,
  default: ({
    jobExperience,
    openExperience,
  }: {
    jobExperience: IJobInfo[];
    openExperience: (id: string) => void;
  }) => (
    <div>
      {jobExperience.map((comp) => (
        <button
          key={comp.id}
          data-testid={`button-${comp.id}`}
          onClick={() => openExperience(comp.id)}
        >
          {comp.CompanyName}
        </button>
      ))}
    </div>
  ),
}));

jest.mock("./TabSelectorBody", () => ({
  __esModule: true,
  default: ({ displayedCompany }: { displayedCompany: IJobInfo }) => (
    <div>
      <h3>{displayedCompany.Position}</h3>
      <p>{displayedCompany.CompanyName}</p>
      <p>{displayedCompany.Tenure}</p>
      <ul>
        {displayedCompany.BulletPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  ),
}));

// Mock data for testing
const mockJobExperience: IJobInfo[] = [
  {
    id: "1",
    CompanyName: "TechCorp",
    Position: "Software Engineer",
    CompanyURL: "https://techcorp.com",
    Tenure: "Jan 2020 - Present",
    BulletPoints: [
      "Developed key features",
      "Led a team",
      "Improved performance",
    ],
  },
  {
    id: "2",
    CompanyName: "WebWorks",
    Position: "Front-End Developer",
    CompanyURL: "https://webworks.com",
    Tenure: "Jan 2018 - Dec 2019",
    BulletPoints: [
      "Built responsive websites",
      "Optimized front-end performance",
    ],
  },
];

const mockStyles: IStyles = {
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

describe("TabSelector component", () => {
//   test("renders the initial displayed company", () => {
//     render(
//       <TabSelector jobExperience={mockJobExperience} styling={mockStyles} />
//     );

//     // Check initial displayed company
//     expect(screen.getByText(mockJobExperience[0].Position)).toBeInTheDocument();
//     expect(
//       screen.getByText(mockJobExperience[0].CompanyName)
//     ).toBeInTheDocument();
//     expect(screen.getByText(mockJobExperience[0].Tenure)).toBeInTheDocument();
//     mockJobExperience[0].BulletPoints.forEach((point) => {
//       expect(screen.getByText(point)).toBeInTheDocument();
//     });
//   });

//   test("updates displayed company when a button is clicked", () => {
//     render(
//       <TabSelector jobExperience={mockJobExperience} styling={mockStyles} />
//     );

//     // Simulate clicking on the second company's button
//     fireEvent.click(screen.getByTestId("button-2"));

//     // Check updated displayed company
//     expect(screen.getByText(mockJobExperience[1].Position)).toBeInTheDocument();
//     expect(
//       screen.getByText(mockJobExperience[1].CompanyName)
//     ).toBeInTheDocument();
//     expect(screen.getByText(mockJobExperience[1].Tenure)).toBeInTheDocument();
//     mockJobExperience[1].BulletPoints.forEach((point) => {
//       expect(screen.getByText(point)).toBeInTheDocument();
//     });
//   });

  test("renders TabSelectorButtons with correct props", () => {
    render(
      <TabSelector jobExperience={mockJobExperience} styling={mockStyles} />
    );

    // Check if TabSelectorButtons is rendered with the correct jobExperience
    mockJobExperience.forEach((job) => {
      expect(screen.getByTestId(`button-${job.id}`)).toBeInTheDocument();
      expect(screen.getByTestId(`button-${job.id}`)).toHaveTextContent(
        job.CompanyName
      );
    });
  });

//   test("renders TabSelectorBody with correct displayedCompany", () => {
//     render(
//       <TabSelector jobExperience={mockJobExperience} styling={mockStyles} />
//     );

//     // Check if TabSelectorBody is rendered with the initial displayedCompany
//     expect(screen.getByText(mockJobExperience[0].Position)).toBeInTheDocument();
//     expect(
//       screen.getByText(mockJobExperience[0].CompanyName)
//     ).toBeInTheDocument();
//     expect(screen.getByText(mockJobExperience[0].Tenure)).toBeInTheDocument();
//     mockJobExperience[0].BulletPoints.forEach((point) => {
//       expect(screen.getByText(point)).toBeInTheDocument();
//     });
//   });

//   test("handles clicking on a non-existent company gracefully", () => {
//     render(
//       <TabSelector jobExperience={mockJobExperience} styling={mockStyles} />
//     );

//     // Simulate clicking on a non-existent company's button
//     fireEvent.click(screen.getByTestId("button-unknown"));

//     // Check fallback displayed company
//     expect(screen.getByText("Unknown")).toBeInTheDocument();
//     expect(screen.getByText("Unknown")).toBeInTheDocument(); // Position
//     expect(screen.getByText("Unknown")).toBeInTheDocument(); // CompanyName
//     expect(screen.queryByText("TechCorp")).not.toBeInTheDocument(); // Ensure initial company is not displayed
//     expect(screen.queryByText("WebWorks")).not.toBeInTheDocument(); // Ensure other company is not displayed
//   });
});
