import React from "react";
import ThreeQuarterView from "../../_components/ui/SubViews/ThreeQuarterView";
import PageHeader from "../../_components/common/headers/PageHeader";
import ArticleCard from "./ArticleCard";

interface IArticlesHomeProps {
}

export const ArticlesHome: React.FC<IArticlesHomeProps> = ({}) => {
    return (
        <>
            <PageHeader title={"Articles"}/>
            <ThreeQuarterView>
                <ArticleCard/>
            </ThreeQuarterView>
        </>
    );
};

export default ArticlesHome;
