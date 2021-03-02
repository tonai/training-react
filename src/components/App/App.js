import { useEffect, useState } from 'react';

import Article from "../Article/Article";
import Header from "../Header/Header";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then(response => response.json())
      .then(json => setArticles(json));
  }, []);

  function increment() {
    setCounter(prevState => prevState + 1);
  }

  function toggleArticle(index) {
    // Avec map
    // setSelectedArticles(prevState => {
    //   return prevState.map((state, i) => {
    //     return index === i ? !state : state;
    //   });
    // });

    // Avec clone
    setSelectedArticles(prevState => {
      const clone = [...prevState];
      clone[index] = !clone[index];
      return clone;
    });
  }

  const list = articles.map((article, i) =>
    <Article
      article={article}
      index={i}
      key={article.id}
      selected={selectedArticles[i]}
      toggleArticle={toggleArticle}
    />
  );

  return (
    <div className="App">
      <Header/>
      {list}
      <button onClick={increment}>{counter}</button>
    </div>
  );
}

export default App;
