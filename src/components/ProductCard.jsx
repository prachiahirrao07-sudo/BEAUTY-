import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function ProductCard({ name, price, img, rating }) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsAdded(true);
    addToCart({ name, price, img });
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="card product-card">
      <img src={img} alt={name} />

      <div className="product-tag">Best seller</div>
      <h3>{name}</h3>

      <div className="rating">
        {"⭐".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>

      <p className="price">₹{price}</p>

      <button 
        className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
        onClick={handleAddToCart}
      >
        {isAdded ? "✓ Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
