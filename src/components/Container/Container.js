function Container(props) {
  const { children } = props;
  return (
    <div style={{
      backgroundColor: 'lightgrey',
      border: '1px solid black',
      padding: '20px',
      margin: '20px'
    }} >{children}</div>
  );
}

export default Container;
