import React from "react";
import Link from "next/link";
import HeaderLogoText from "../headers/HeaderLogoText";

interface IHeaderLinkTextProps {
  url: string;
  urlText: string;
}

export const HeaderLinkText: React.FC<IHeaderLinkTextProps> = ({
  url,
  urlText,
}) => {
  return (
    <Link href={url}>
      <HeaderLogoText text={` ${urlText}`} />
    </Link>
  );
};

export default HeaderLinkText;
