
import "./Article.css";

function Article(props) {
  const { article, index, selected, toggleArticle } = props;
  const { title, category, published } = article;

  function handleClick() {
    toggleArticle(index);
  }

  return (
    <div
      className={'Article ' + (selected ? 'Article--selected' : '')}
      onClick={handleClick}
    >
      <div className="Article__title">{title}</div>
      <div>{category}</div>
      <div>{published ? 'Published' : 'Draft'}</div>
    </div>
  );
}

export default Article;
