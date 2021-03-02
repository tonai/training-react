import Article from '../Article/Article';

function App() {
  const art = {
    title: 'Article 1',
    id: 1,
    category: 'News',
    published: false
  };

  return (
    <div className="App">
      <Article article={art}/>
    </div>
  );
}

export default App;
