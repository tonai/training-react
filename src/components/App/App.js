import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";

import useCategories from "../../hooks/useCategories";

import Header from "../Header/Header";
import I18n from "../I18n/I18n";

// import ArticlePage from "../ArticlePage/ArticlePage";
// import ArticlesPage from "../ArticlesPage/ArticlesPage";
const ArticlePage = lazy(() => import("../ArticlePage/ArticlePage"));
const ArticlesPage = lazy(() => import("../ArticlesPage/ArticlesPage"));

function App() {
  const categories = useCategories();

  return (
    <BrowserRouter>
      <categoriesContext.Provider value={categories}>
        <I18n>
          <Header />
          <Suspense fallback="loading...">
            <Switch>
              <Route path="/" exact component={ArticlesPage} />
              <Route path="/article" exact component={ArticlePage} />
              <Route path="/article/:id" exact component={ArticlePage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </I18n>
      </categoriesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
