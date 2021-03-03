import { useHistory } from "react-router-dom";

import useArticle from "../../hooks/useArticle";
import useCategories from "../../hooks/useCategories";

import { createArticles, editArticles } from "../../services/articles";

import Title from "../Title/Title";

function ArticlePage(props) {
  const id = props.match.params.id;
  const history = useHistory();
  const categories = useCategories();
  const [article, setArticle] = useArticle(id);

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
    if (id) {
      editArticles(article).then(() => history.push("/"));
    } else {
      createArticles(article).then(() => history.push("/"));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title title={id ? `Edit article (${id})` : 'Create new article'} />
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
