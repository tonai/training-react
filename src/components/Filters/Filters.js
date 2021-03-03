function Filters(props) {
  const { category, title, setCategory, setTitle } = props;

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
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}

export default Filters;
