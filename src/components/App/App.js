import { useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";
import i18nContext from "../../contexts/i18n";

import en from "../../locale/en.json";
import fr from "../../locale/fr.json";

import useCategories from "../../hooks/useCategories";

import ArticlePage from "../ArticlePage/ArticlePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import Header from "../Header/Header";

function App() {
  const categories = useCategories();
  const [language, setLanguage] = useState('en');

  function t(string) {
    switch(language) {
      case 'fr':
        return fr[string];

      case 'en':
        return en[string];

      default:
        return string;
    }
  }

  return (
    <BrowserRouter>
      <categoriesContext.Provider value={categories}>
        <i18nContext.Provider value={t}>
          <Header language={language} setLanguage={setLanguage} />
          <Switch>
            <Route path="/" exact component={ArticlesPage} />
            <Route path="/article" exact component={ArticlePage} />
            <Route path="/article/:id" exact component={ArticlePage} />
            <Redirect to="/" />
          </Switch>
        </i18nContext.Provider>
      </categoriesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
