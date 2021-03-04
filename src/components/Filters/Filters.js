import { useContext, useEffect, useRef } from "react";

import categoriescontext from "../../contexts/categories";

function Filters(props) {
  const { category, title, setCategory, setTitle } = props;
  const categories = useContext(categoriescontext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <input
        value={title}
        onChange={handleTitleChange}
        ref={inputRef}
      />
      <select
        value={category}
        onChange={handleCategoryChange}
      >
        <option value=""></option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
