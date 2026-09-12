import React from "react";
import { LinkText } from "./LinkText";

interface ISubMenuItemLinkProps {
  text: string;
  url: string;
  urlText: string;
}

export const TextWithLink: React.FC<ISubMenuItemLinkProps> = ({
  text,
  url,
  urlText,
}) => {
  return (
    <p className={`text-right dark:text-text-dark text-lg`}>
      {text}
      <LinkText url={url} urlText={urlText} />.
    </p>
  );
};

export default TextWithLink;
