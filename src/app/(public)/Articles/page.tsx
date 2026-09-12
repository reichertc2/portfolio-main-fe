import MainContainer from "@/app/_components/common/MainContainer";
import ArticlesHome from "@/app/_components/modules/articles/ArticlesHome";
import React from "react";

interface IArticlePageProps {}

const ArticlesPage: React.FC<IArticlePageProps> = () => {
  return (
    <MainContainer>
      <ArticlesHome  />
    </MainContainer>
  );
};

export default ArticlesPage;
