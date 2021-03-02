import Article from "../Article/Article";
import Header from "../Header/Header";

function App() {
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

  const list = articles.map(article =>
    <Article article={article} key={article.id} />
  );

  return (
    <div className="App">
      <Header/>
      {list}
    </div>
  );
}

export default App;
