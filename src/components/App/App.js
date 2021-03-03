import { useState } from "react";

import useArticles from "../../hooks/useArticles";

import Article from "../Article/Article";
import Filters from "../Filters/Filters";
import Header from "../Header/Header";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [title, setTitle] = useState("");
  const articles = useArticles();

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

  const list = articles
    .filter(article => article.title.includes(title))
    .map((article, i) => (
      <Article
        article={article}
        index={i}
        key={article.id}
        selected={selectedArticles[i]}
        toggleArticle={toggleArticle}
      />
    ));

  return (
    <div className="App">
      <Header />
      <Title title="Homepage" />
      <Filters title={title} setTitle={setTitle} />
      {list}
      <button onClick={increment}>{counter}</button>
      <Resize />
    </div>
  );
}

export default App;
