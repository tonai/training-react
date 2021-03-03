import { BrowserRouter, Route } from 'react-router-dom';

import ArticlesPage from "../ArticlesPage/ArticlesPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ArticlesPage} />
    </BrowserRouter>
  );
}

export default App;
