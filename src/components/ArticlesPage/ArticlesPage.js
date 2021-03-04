import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import categoriescontext from "../../contexts/categories";
import i18ncontext from "../../contexts/i18n";

import useArticles from "../../hooks/useArticles";

import { deleteArticle, getArticles } from "../../services/articles";

import AlertDialog from "../AlertDialog/AlertDialog";
import Article from "../Article/Article";
import Container from "../Container/Container";
import Counter from "../Counter/Counter";
import Filters from "../Filters/Filters";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function ArticlesPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useArticles();
  const categories = useContext(categoriescontext);
  const { t } = useContext(i18ncontext);
  const [open, setOpen] = useState(false);
  const articleId = useRef();

  const categoriesMap = useMemo(() => {
    const map = new Map();
    for (let category of categories) {
      map.set(category.id, category);
    }
    return map;
  }, [categories]);

  const handleDeleteArticle = useCallback((id) => {
    articleId.current = id;
    setOpen(true);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  function handleConfirm() {
    setArticles(articles.filter((article) => article.id !== articleId.current));
    deleteArticle(articleId.current).catch(() =>
      getArticles().then((articles) => setArticles(articles))
    );
    setOpen(false);
  }

  const filteredArticles = useMemo(
    () =>
      articles
        .filter((article) => article.title.includes(title))
        .filter(
          (article) => category === "" || article.category === Number(category)
        ),
    [articles, title, category]
  );

  const toggleArticle = useCallback((index) => {
    setArticles(prevState => {
      const clone = [...prevState];
      clone[index] = {
        ...clone[index],
        selected: !clone[index].selected
      };
      return clone;
    });
  }, [setArticles]);

  const list = filteredArticles.map((article, i) => (
    <Article
      article={article}
      categoriesMap={categoriesMap}
      handleDeleteArticle={handleDeleteArticle}
      index={i}
      key={article.id}
      toggleArticle={toggleArticle}
    />
  ));

  return (
    <>
      <Title title={t("Homepage")} />
      <div className="App">
        <Link to="/article">Create new article</Link>
        <Container>
          <Filters
            category={category}
            title={title}
            setCategory={setCategory}
            setTitle={setTitle}
          />
          {list}
        </Container>
        <Container>
          <Counter/>
        </Container>
        <Container>
          <Resize />
        </Container>
      </div>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </>
  );
}

export default ArticlesPage;
