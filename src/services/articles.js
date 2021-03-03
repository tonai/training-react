export function getArticles() {
  return fetch("http://localhost:3001/articles").then((response) =>
    response.json()
  );
}

export function getArticle(id) {
  return fetch(`http://localhost:3001/articles/${id}`).then((response) =>
    response.json()
  );
}

export function deleteArticle(id) {
  return fetch(`http://localhost:3001/articles/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

export function editArticles(article) {
  return fetch(`http://localhost:3001/articles/${article.id}`, {
    body: JSON.stringify({
      ...article,
      category: Number(article.category),
    }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export function createArticles(article) {
  return fetch("http://localhost:3001/articles", {
    body: JSON.stringify({
      ...article,
      category: Number(article.category),
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
