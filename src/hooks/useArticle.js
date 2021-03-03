import { useEffect, useState } from "react";

import { getArticle } from "../services/articles";

function useArticle(id) {
  const [article, setArticle] = useState({
    title: "",
    category: "1",
    published: false,
  });
  useEffect(() => {
    console.log(id);
    if (id) {
      getArticle(id).then(article => setArticle(article));
    }
  }, [id]);
  return [article, setArticle];
}

export default useArticle;
