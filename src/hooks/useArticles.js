import { useEffect, useState } from 'react';

import { getArticles } from "../services/articles";

function useArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then(json => setArticles(json));
  }, []);
  return [articles, setArticles];
}

export default useArticles;
