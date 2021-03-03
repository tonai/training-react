function Filters(props) {
  const { title, setTitle } = props;

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input value={title} onChange={handleTitleChange}/>
    </div>
  );
}

export default Filters;
