import React from "react";
import HeaderLinkText from "../../common/links/HeaderLinkText";
import SubHeaderGenericText from "../../common/headers/SubHeaderGenericText";

interface IArticleCardProps {}

export const ArticleCard: React.FC<IArticleCardProps> = () => {
  return (
    <>
      <HeaderLinkText url={""} urlText={"Test Title"} />
      {/* <SubHeaderGenericText text={"Date here"}/> */}
    </>
  );
};

export default ArticleCard;
