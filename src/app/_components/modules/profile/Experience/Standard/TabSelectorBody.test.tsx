import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TabSelectorBody } from "./TabSelectorBody"; // Adjust the import path as necessary
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import Link from "next/link";

// Mock the Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// Mock data for testing
const mockCompany: IJobInfo = {
  id: "1",
  CompanyName: "TechCorp",
  Position: "Software Engineer",
  CompanyURL: "https://techcorp.com",
  Tenure: "Jan 2020 - Present",
  BulletPoints: [
    "Developed key features",
    "Led a team of developers",
    "Improved application performance",
  ],
};

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

describe("TabSelectorBody component", () => {
  test("renders the company position correctly", () => {
    render(
      <TabSelectorBody displayedCompany={mockCompany} styling={mockStyles} />
    );

    expect(screen.getByText(mockCompany.Position)).toBeInTheDocument();
  });

  //   test("renders the company link with correct URL and name", () => {
  //     render(<TabSelectorBody displayedCompany={mockCompany} styling={mockStyles} />);

  //     const linkElement = screen.getByText(`--> ${mockCompany.CompanyName}`);
  //     expect(linkElement).toBeInTheDocument();
  //     expect(linkElement.closest("a")).toHaveAttribute("href", mockCompany.CompanyURL);
  //   });

  test("renders the tenure text correctly", () => {
    render(
      <TabSelectorBody displayedCompany={mockCompany} styling={mockStyles} />
    );

    expect(screen.getByText(mockCompany.Tenure)).toBeInTheDocument();
  });

  test("renders all bullet points correctly", () => {
    render(
      <TabSelectorBody displayedCompany={mockCompany} styling={mockStyles} />
    );

    mockCompany.BulletPoints.forEach((bulletPoint) => {
      expect(screen.getByText(bulletPoint)).toBeInTheDocument();
    });
  });

  //   test("applies correct styles to elements", () => {
  //     render(<TabSelectorBody displayedCompany={mockCompany} styling={mockStyles} />);

  //     const container = screen.getByRole("article").parentElement;
  //     expect(container).toHaveClass("px-4 dark:text-stone-100 inline-block w-4/5 align-top");

  //     const bodyHeader = screen.getByText(mockCompany.Position);
  //     expect(bodyHeader).toHaveClass("text-lg inline-block");

  //     const link = screen.getByText(`--> ${mockCompany.CompanyName}`);
  //     expect(link).toHaveClass("inline-block");

  //     const hoverAnimation = screen.getByText(mockCompany.CompanyName);
  //     expect(hoverAnimation).toHaveClass("hover-underline-animation");

  //     const tenureText = screen.getByText(mockCompany.Tenure);
  //     expect(tenureText).toHaveClass("text-xs dark:text-stone-100 font-semibold");

  //     const experienceBullets = screen.getByRole("list");
  //     expect(experienceBullets).toHaveClass("p-4 text-sm w-full");

  //     const bulletPoints = screen.getAllByRole("listitem");
  //     bulletPoints.forEach((bulletPoint) => {
  //       expect(bulletPoint).toHaveClass("img-li pl-6 pt-2");
  //     });
  //   });

  test("renders correctly with missing optional props", () => {
    render(
      <TabSelectorBody
        displayedCompany={{ ...mockCompany, CompanyURL: "Test" }}
        styling={mockStyles}
      />
    );

    const linkElement = screen.queryByText(`--> ${mockCompany.CompanyName}`);
    expect(linkElement).toBeNull();
  });
});
