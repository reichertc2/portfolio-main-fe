import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SocialMediaIcons } from "./SocialMediaIcons"; // Adjust the import path as necessary
import { ISocialInfo } from "@/app/_models/user";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

// Add FontAwesome icons to the library for testing
library.add(faTwitter, faLinkedin);

// Mock data for testing
const mockSocialMedia: ISocialInfo[] = [
  {
    id: "1",
    url: "https://twitter.com",
    icon: faTwitter,
  },
  {
    id: "2",
    url: "https://linkedin.com",
    icon: faLinkedin,
  },
];

describe("SocialMediaIcons component", () => {
  test("renders the correct number of social media icons", () => {
    render(<SocialMediaIcons socialMedia={mockSocialMedia} />);

    const icons = screen.getAllByRole("link");
    expect(icons).toHaveLength(mockSocialMedia.length);
  });

  //   test("renders the correct icon and URL for each social media item", () => {
  //     render(<SocialMediaIcons socialMedia={mockSocialMedia} />);

  //     mockSocialMedia.forEach((item) => {
  //       const linkElement = screen.getByRole("link", { name: "" });
  //       expect(linkElement).toHaveAttribute("href", item.url);
  //       const iconElement = screen.getByTestId(`fa-icon-${item.icon.iconName}`);
  //       expect(iconElement).toBeInTheDocument();
  //     });
  //   });

  //   test("applies the correct classes to the icons container", () => {
  //     render(<SocialMediaIcons socialMedia={mockSocialMedia} />);

  //     const iconsContainer = screen.getByRole("presentation");
  //     expect(iconsContainer).toHaveClass("m-auto m-0 inline");
  //   });

  test("applies the correct classes to each icon", () => {
    render(<SocialMediaIcons socialMedia={mockSocialMedia} />);

    const iconElements = screen.getAllByRole("link");
    iconElements.forEach((iconElement) => {
      expect(iconElement.parentElement).toHaveClass("p-1 inline");
    });
  });

  test("renders correctly with an empty social media array", () => {
    render(<SocialMediaIcons socialMedia={[]} />);

    const icons = screen.queryAllByRole("link");
    expect(icons).toHaveLength(0);
  });
});
