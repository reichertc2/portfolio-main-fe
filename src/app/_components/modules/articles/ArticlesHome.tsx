import React from "react";
import ThreeQuarterView from "../../ui/SubViews/ThreeQuarterView";
import PageHeader from "../../common/headers/PageHeader";
import ArticleCard from "./ArticleCard";

interface IArticlesHomeProps {}

export const ArticlesHome: React.FC<IArticlesHomeProps> = ({}) => {
  return (
    <>
      <PageHeader title={"Articles"} />
      <ThreeQuarterView>
        <ArticleCard />
      </ThreeQuarterView>
    </>
  );
};

export default ArticlesHome;
