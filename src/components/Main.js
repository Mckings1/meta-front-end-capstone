import React from "react";

const Main = () => {
  return (
    <main className="main-content">
      <section className="specials-section">
        <h2>Specials</h2>
        <div className="specials-list">
          <div className="special-item">
            <img src="path-to-your-image" alt="Greek Salad" />
            <h3>
              Greek Salad <span>$12.99</span>
            </h3>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and
              feta cheese.
            </p>
          </div>
          <div className="special-item">
            <img src="path-to-your-image" alt="Bruschetta" />
            <h3>
              Bruschetta <span>$5.99</span>
            </h3>
            <p>
              Grilled bread with garlic, topped with tomatoes, olive oil, and
              basil.
            </p>
          </div>
          <div className="special-item">
            <img src="path-to-your-image" alt="Lemon Dessert" />
            <h3>
              Lemon Dessert <span>$5.00</span>
            </h3>
            <p>
              A delicious lemon-flavored dessert straight from grandma's recipe
              book.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
