import React, { createContext, useState } from "react";
import { supabase } from "../supabase";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  async function addToCart(item) {
    setItems((prev) => [...prev, item]);

    try {
      const { error } = await supabase.from("cart").insert([
        {
          product_name: item.name || item.product_name || "Unknown product",
          price: item.price,
        },
      ]);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error adding item to Supabase cart:", error);
    }
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
