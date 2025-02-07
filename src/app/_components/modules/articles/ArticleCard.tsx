import React from "react";
import MarkdownComponent from "../../common/markdown/MarkdownComponent";
import HeaderLinkText from "../../common/links/HeaderLinkText";
import SubHeaderGenericText from "../../common/headers/SubHeaderGenericText";

interface IArticleCardProps {}

export const ArticleCard: React.FC<IArticleCardProps> = () => {
  return (
    <>
      <HeaderLinkText url={""} urlText={"Test Title"} />
      {/* <SubHeaderGenericText text={"Date here"}/> */}
      <MarkdownComponent markdown={"# Test \n\n ## Test 2"} />
    </>
  );
};

export default ArticleCard;
