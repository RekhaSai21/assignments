import React from "react";

const product1 = { name: "Wireless Mouse", price: 799, rating: 4.8 };
const product2 = { name: "Keyboard", price: 2499, rating: 4.7 };
const product3 = { name: "Gaming Headset", price: 3299, rating: 4.6 };
const products = [product1, product2, product3];

function Header() {
  return (
    <header className="store-header">
      <h1>Tech Store</h1>
      <nav aria-label="Main navigation">
        <a href="#products">Products</a>
      </nav>
    </header>
  );
}

function ProductCard({ product }) {
  const imageUrl = `https://placehold.co/320x200?text=${encodeURIComponent(
    product.name
  )}`;

  return (
    <article className="product-card">
      <img src={imageUrl} alt={product.name} className="product-card__image" />
      <h2>{product.name}</h2>
      <p>Price: Rs. {product.price}</p>
      <p>Rating: {product.rating} / 5</p>
      <button type="button" onClick={() => alert(`${product.name} added to cart`)}>
        Buy Now
      </button>
    </article>
  );
}

function Footer() {
  return (
    <footer className="store-footer">
      <p>&copy; 2026 Tech Store</p>
    </footer>
  );
}

function App() {
  return (
    <div className="store-app">
      <Header />
      <main id="products" className="product-list">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
