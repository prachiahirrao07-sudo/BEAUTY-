import React, { useState, useContext } from "react";
import "./ProductSpotlight.css";
import spotlightImg from "../assets/spotlight.svg";
import { CartContext } from "../contexts/CartContext";

export function ProductSpotlight() {
  const [flipped, setFlipped] = useState(false);
  const [added, setAdded] = useState(false);

  const product = {
    name: "Vitamin C Serum",
    price: "$39",
    description:
      "A lightweight, fast-absorbing serum with hyaluronic acid and vitamin C to brighten and hydrate.",
    image: spotlightImg,
  };

  const { addToCart } = useContext(CartContext);

  function handleAdd() {
    setAdded(true);
    addToCart({ name: product.name, price: product.price });
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <section className="product-spotlight section">
      <h2 className="spotlight-title">Product Spotlight</h2>

      <div
        className={`ps-card ${flipped ? "is-flipped" : ""}`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((s) => !s)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((s) => !s)}
      >
        <div className="ps-inner">
          <div className="ps-front">
            <div className="ps-media">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="ps-copy">
              <h3>{product.name}</h3>
              <p className="ps-price">{product.price}</p>
              <p className="ps-tag">Best for hydration & glow</p>
            </div>
          </div>

          <div className="ps-back">
            <div className="ps-back-copy">
              <h3>About this product</h3>
              <p>{product.description}</p>
              <div className="ps-actions">
                <button className={`btn btn-primary ${added ? "added" : ""}`} onClick={handleAdd}>
                  {added ? "Added ✓" : "Add to cart"}
                </button>
                <a href="/products" className="btn btn-ghost">
                  View collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSpotlight;
