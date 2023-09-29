import Pizza from "./Pizza";

function Menu({ pizzas }) {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas && (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                name={pizza.name}
                ingredient={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default Menu;
