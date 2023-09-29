function Pizza({ name, ingredient, photoName, price, soldOut }) {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
