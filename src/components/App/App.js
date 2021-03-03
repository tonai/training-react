import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import ArticlePage from "../ArticlePage/ArticlePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import Header from "../Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ArticlesPage} />
        <Route path="/article" exact component={ArticlePage} />
        <Route path="/article/:id" exact component={ArticlePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
