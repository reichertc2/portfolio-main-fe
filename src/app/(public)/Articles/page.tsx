import MainContainer from "@/app/_components/common/MainContainer";
import ArticlesHome from "@/app/_components/modules/articles/ArticlesHome";
import { theme } from "../../../../data/theme";


interface IArticlePageProps {}

const ArticlesPage: React.FC<IArticlePageProps> = () => {
  return (
    <MainContainer>
      <ArticlesHome theme={theme} />
    </MainContainer>
  );
};

export default ArticlesPage;
