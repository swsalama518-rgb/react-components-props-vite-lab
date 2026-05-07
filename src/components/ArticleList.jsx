import Article from "./Article";

function ArticleList(props) {
  const articles = props.articles || [];

  const articleComponents = props.articles.map((article, index) => (
      <Article
        key={index}
        title={article.title}
        date={article.date}
        preview={article.preview}
      />
  ));

  return <main>{articleComponents}</main>;
}

export default ArticleList;