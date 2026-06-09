import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export function Cart() {
  const { items, clearCart } = useContext(CartContext);

  const total = items.reduce((sum, item) => {
    const price = typeof item.price === "string" ? parseInt(item.price.replace("₹", "").replace("$", "")) : item.price;
    return sum + price;
  }, 0);

  return (
    <div className="cart-page">
      <div className="section">
        <h1 className="cart-title">Your Cart</h1>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty 🛒</p>
            <Link to="/products" className="btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item, idx) => (
                <div key={idx} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <p>Total Items: <strong>{items.length}</strong></p>
                <p>Estimated Total: <strong>${total}</strong></p>
              </div>
              <div className="cart-actions">
                <button className="btn" onClick={() => alert("Checkout feature coming soon!")}>
                  Proceed to Checkout
                </button>
                <button className="btn btn-secondary" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
