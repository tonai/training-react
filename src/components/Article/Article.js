import "./Article.css";

function Article(props) {
  const { article } = props;
  const { title, category, published } = article;

  return (
    <div className="Article">
      <div>{title}</div>
      <div>{category}</div>
      <div>{published ? 'Published' : 'Draft'}</div>
    </div>
  );
}

export default Article;
