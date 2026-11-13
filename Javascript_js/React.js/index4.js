import React, { Component } from "react";

const food1 = { name: "Chicken Biryani", price: 249 };
const food2 = { name: "Veg Pizza", price: 399 };
const food3 = { name: "Burger", price: 199 };
const food4 = { name: "Cake", price: 299 };
const foods = [food1, food2, food3, food4];
const offers = ["50% OFF", "Free Delivery", "Buy 1 Get 1"];

function Header() {
  return (
    <header className="food-header">
      <h1>Fresh Food Delivery</h1>
    </header>
  );
}

function FoodCard({ food }) {
  const imageUrl = `https://placehold.co/320x200?text=${encodeURIComponent(
    food.name
  )}`;

  return (
    <article className="food-card">
      <img src={imageUrl} alt={food.name} className="food-card__image" />
      <h2>{food.name}</h2>
      <p>Price: Rs. {food.price}</p>
      <button type="button">Order Now</button>
    </article>
  );
}

class Offers extends Component {
  render() {
    return (
      <section className="food-offers">
        <h2>Today's Offers</h2>
        <ul>
          {offers.map((offer) => (
            <li key={offer}>{offer}</li>
          ))}
        </ul>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="food-footer">
        <p>&copy; 2026 Fresh Food Delivery</p>
      </footer>
    );
  }
}

function App() {
  return (
    <>
      <Header />
      <main className="food-app">
        <section
          className="food-list"
          aria-label="Food menu"
          style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
        >
          {foods.map((food) => (
            <FoodCard key={food.name} food={food} />
          ))}
        </section>
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
