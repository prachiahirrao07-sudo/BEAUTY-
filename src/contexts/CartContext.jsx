import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(item) {
    setItems((prev) => [...prev, item]);
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
