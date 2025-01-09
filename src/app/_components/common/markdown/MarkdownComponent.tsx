'use client'

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LinkText from "../links/LinkText";
import HeaderGenericText from "../headers/HeaderGenericText";
import SubHeaderGenericText from "../headers/SubHeaderGenericText";
import TextSectionHeaderGenericText from "../headers/TextSectionHeaderGenericText";
import CodeBlock from "./CodeBlock";
import GenericText from "./GenericText";

interface IMarkDownComponentProps {
  markdown?: string | null;
}

const MarkdownComponent: React.FC<IMarkDownComponentProps> = ({ markdown }) => {
  
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <HeaderGenericText
              text={children ? children.toString() : "No Header"}
            />
          ),
          h2: ({ children }) => (
            <SubHeaderGenericText
              text={children ? children.toString() : "No Header"}
            />
          ),
          h3: ({ children }) => (
            <TextSectionHeaderGenericText
              text={children ? children.toString() : "No Header"}
            />
          ),
          // eslint-disable-next-line react/no-children-prop
          p: ({ children }) => <GenericText children={children}/>,
          a: ({ href, children }) => (
            <LinkText
              url={href}
              urlText={children ? children.toString() : "No Text"}
            />
          ),
          code: CodeBlock,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
