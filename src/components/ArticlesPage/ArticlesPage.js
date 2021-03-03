import { useState } from "react";
import { Link } from "react-router-dom";

import useArticles from "../../hooks/useArticles";
import useCategories from "../../hooks/useCategories";

import Article from "../Article/Article";
import Container from "../Container/Container";
import Filters from "../Filters/Filters";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function ArticlesPage() {
  const [counter, setCounter] = useState(0);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const articles = useArticles();
  const categories = useCategories();

  const categoriesMap = new Map();
  for (let category of categories) {
    categoriesMap.set(category.id, category);
  }

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  function toggleArticle(index) {
    // Avec map
    // setSelectedArticles(prevState => {
    //   return prevState.map((state, i) => {
    //     return index === i ? !state : state;
    //   });
    // });

    // Avec clone
    setSelectedArticles((prevState) => {
      const clone = [...prevState];
      clone[index] = !clone[index];
      return clone;
    });
  }

  const filteredArticles = articles
    .filter(article => article.title.includes(title))
    .filter(article => category === '' || article.category === Number(category));
    
  const list = filteredArticles
    .map((article, i) => (
      <Article
        article={article}
        categoriesMap={categoriesMap}
        index={i}
        key={article.id}
        selected={selectedArticles[i]}
        toggleArticle={toggleArticle}
      />
    ));

  return (
    <div className="App">
      <Title title="Homepage" />
      <Link to="/article">Create new article</Link>
      <Container>
        <Filters
          categories={categories}
          category={category}
          title={title}
          setCategory={setCategory}
          setTitle={setTitle}
        />
        {list}
      </Container>
      <Container>
        <button onClick={increment}>{counter}</button>
      </Container>
      <Container>
        <Resize />
      </Container>
    </div>
  );
}

export default ArticlesPage;
