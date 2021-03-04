import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";

import useCategories from "../../hooks/useCategories";

import ArticlePage from "../ArticlePage/ArticlePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import Header from "../Header/Header";

function App() {
  const categories = useCategories();

  return (
    <BrowserRouter>
      <categoriesContext.Provider value={categories}>
        <Header />
        <Switch>
          <Route path="/" exact component={ArticlesPage} />
          <Route path="/article" exact component={ArticlePage} />
          <Route path="/article/:id" exact component={ArticlePage} />
          <Redirect to="/" />
        </Switch>
      </categoriesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
