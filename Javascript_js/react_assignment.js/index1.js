import { useState } from "react";

const product = {
  name: "Wireless Headphones",
  price: 2499,
  category: "Electronics",
  image: "https://placehold.co/640x420?text=Wireless+Headphones",
};

function ProductCard() {
  const [inStock, setInStock] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <article className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <h1 className="h4 card-title">{product.name}</h1>
                  <span
                    className={`badge ${
                      inStock ? "text-bg-success" : "text-bg-danger"
                    }`}
                  >
                    {inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <p className="text-secondary mb-2">{product.category}</p>
                <p className="fs-5 fw-semibold">Rs. {product.price}</p>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setQuantity((current) => current - 1)}
                    disabled={!inStock || quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span aria-live="polite">Quantity: {quantity}</span>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setQuantity((current) => current + 1)}
                    disabled={!inStock}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!inStock}
                    onClick={() =>
                      setCartCount((current) => current + quantity)
                    }
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      isWishlisted ? "btn-danger" : "btn-outline-danger"
                    }`}
                    onClick={() =>
                      setIsWishlisted((current) => !current)
                    }
                    aria-pressed={isWishlisted}
                  >
                    {isWishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setInStock((current) => !current)}
                  >
                    Set {inStock ? "Out of Stock" : "In Stock"}
                  </button>
                </div>

                <p className="small text-secondary mt-3 mb-0" aria-live="polite">
                  Items in cart: {cartCount}
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductCard;
