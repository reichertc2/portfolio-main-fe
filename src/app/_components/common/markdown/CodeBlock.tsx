import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  if (inline) {
    return <code className="bg-gray-200 rounded p-1">{children}</code>;
  }
  return (
    <SyntaxHighlighter
      style={solarizedlight}
      language={match ? match[1] : ""}
      PreTag="div"
      className="w-1/3 rounded-lg overflow-hidden"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
