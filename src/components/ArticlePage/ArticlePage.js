import { useState } from "react";
import { useHistory } from "react-router-dom";

import useCategories from "../../hooks/useCategories";

import { createArticles } from "../../services/articles";

function ArticlePage(props) {
  const id = props.match.params.id;
  const history = useHistory();
  const [article, setArticle] = useState({
    title: "",
    category: "1",
    published: false,
  });
  const categories = useCategories();
  console.log(id);

  function handleChange(event) {
    // const clone = {...article};
    // clone[event.target.name] = event.target.value;
    // setArticle(clone);

    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createArticles(article).then(() => history.push("/"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input value={article.title} onChange={handleChange} name="title" />
        </label>
      </div>
      <div>
        <label>
          Category:
          <select
            value={article.category}
            onChange={handleChange}
            name="category"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default ArticlePage;
