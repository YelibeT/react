function ListGroup() {
  let items = ["somethin", "something", "somewhri"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>Nothing found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={(event) => console.log(event)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
