const ListRenderer = ({ items, render }) => {
  return (
    <ul className="list-renderer">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListRenderer;
