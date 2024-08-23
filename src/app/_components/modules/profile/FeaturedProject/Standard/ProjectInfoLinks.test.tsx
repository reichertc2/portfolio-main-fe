import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProjectInfoLinks } from "./ProjectInfoLinks";
import { IUrl } from "@/app/_models/user";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

describe("ProjectInfoLinks component", () => {
  const mockUrlList: IUrl[] = [
    { name: "GitHub", url: "https://github.com", icon: faGithub },
  ];

  //   test("renders without crashing", () => {
  //     const { getByText } = render(<ProjectInfoLinks urlList={mockUrlList} />);
  //     expect(getByText("GitHub")).toBeInTheDocument();
  //   });

  test("renders the correct number of links", () => {
    const { container } = render(<ProjectInfoLinks urlList={mockUrlList} />);
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(mockUrlList.length);
  });
});
