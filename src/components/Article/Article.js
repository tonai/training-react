import { memo } from "react";
import { Link } from "react-router-dom";

import "./Article.css";

function Article(props) {
  const { article, categoriesMap, handleDeleteArticle, index, toggleArticle } = props;
  const { id, title, category: categoryId, published, selected } = article;

  function handleClick() {
    toggleArticle(index);
  }

  function handleDelete(event) {
    event.stopPropagation();
    handleDeleteArticle(id);
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
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default memo(Article);
