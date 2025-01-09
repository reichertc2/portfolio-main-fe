import React from "react";
import Link from "next/link";

interface ILinkText {
  url?: string;
  urlText?: string | null;
}

export const LinkText: React.FC<ILinkText> = ({ url, urlText }) => {
  return <Link href={url ?? ``}>{` ${urlText ?? `no text`}`}</Link>;
};

export default LinkText;
