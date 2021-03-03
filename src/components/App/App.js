import { BrowserRouter, Route } from 'react-router-dom';

import ArticlePage from "../ArticlePage/ArticlePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import Header from "../Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={ArticlesPage} />
      <Route path="/article" exact component={ArticlePage} />
    </BrowserRouter>
  );
}

export default App;
