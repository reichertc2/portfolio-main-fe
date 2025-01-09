import React from "react";
import MarkdownComponent from "../../common/markdown/MarkdownComponent";
import { IStyles } from "@/app/_models/styles";

interface IArticlesHomeProps {}

export const ArticlesHome: React.FC<IArticlesHomeProps> = ({}) => {
  return <MarkdownComponent markdown={"# Test \n\n ## Test 2"} />;
};

export default ArticlesHome;
