
import { Link } from "react-router-dom";

import "./Article.css";

function Article(props) {
  const { article, categoriesMap, index, selected, toggleArticle } = props;
  const { id, title, category: categoryId, published } = article;

  function handleClick() {
    toggleArticle(index);
  }

  const category = categoriesMap.get(categoryId);

  return (
    <div
      className={'Article ' + (selected ? 'Article--selected' : '')}
      onClick={handleClick}
    >
      <div className="Article__title">{title}</div>
      <div>{category?.title}</div>
      <div>{published ? 'Published' : 'Draft'}</div>
      <div>
        <Link to={`/article/${id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default Article;
