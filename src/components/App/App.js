import { useState } from 'react';

import Article from "../Article/Article";
import Header from "../Header/Header";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const articles = [
    {
      title: "Article 1",
      id: 1,
      category: "News",
      published: false,
    },
    {
      title: "Article 2",
      id: 2,
      category: "News",
      published: true,
    },
    {
      title: "Article 3",
      id: 3,
      category: "Blog",
      published: false,
    }
  ];

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
