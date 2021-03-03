function Filters(props) {
  const { categories, category, title, setCategory, setTitle } = props;

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
