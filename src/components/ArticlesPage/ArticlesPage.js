import { useContext, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import categoriescontext from "../../contexts/categories";
import i18ncontext from "../../contexts/i18n";

import useArticles from "../../hooks/useArticles";

import { deleteArticle, getArticles } from "../../services/articles";

import AlertDialog from "../AlertDialog/AlertDialog";
import Article from "../Article/Article";
import Container from "../Container/Container";
import Filters from "../Filters/Filters";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function ArticlesPage() {
  const [counter, setCounter] = useState(0);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useArticles();
  const categories = useContext(categoriescontext);
  const { t } = useContext(i18ncontext);
  const [open, setOpen] = useState(false);
  const articleId = useRef();

  const categoriesMap = new Map();
  for (let category of categories) {
    categoriesMap.set(category.id, category);
  }

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  function toggleArticle(index) {
    // Avec map
    // setSelectedArticles(prevState => {
    //   return prevState.map((state, i) => {
    //     return index === i ? !state : state;
    //   });
    // });

    // Avec clone
    setSelectedArticles((prevState) => {
      const clone = [...prevState];
      clone[index] = !clone[index];
      return clone;
    });
  }

  function handleDeleteArticle(id) {
    // 1
    // deleteArticle(id)
    //   .then(() => getArticles())
    //   .then(articles => setArticles(articles));

    // 2
    // deleteArticle(id)
    //   .then(() => setArticles(articles.filter(article => article.id !== id)));

    // 3
    // setArticles(articles.filter((article) => article.id !== id));
    // deleteArticle(id).catch(() =>
    //   getArticles().then((articles) => setArticles(articles))
    // );

    articleId.current = id;
    setOpen(true);
  }

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

  const list = filteredArticles.map((article, i) => (
    <Article
      article={article}
      categoriesMap={categoriesMap}
      handleDeleteArticle={handleDeleteArticle}
      index={i}
      key={article.id}
      selected={selectedArticles[i]}
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
          <button onClick={increment}>{counter}</button>
        </Container>
        <Container>{counter % 2 === 0 && <Resize />}</Container>
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
