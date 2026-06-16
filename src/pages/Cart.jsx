import { useState, useEffect, useContext } from "react";
import { supabase } from "../supabase";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css";

export function Cart() {
  const { items } = useContext(CartContext);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  async function fetchCart() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("cart").select("*");
      if (error) throw error;
      setCartItems(data || []);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching cart:", error);
      setErrorMessage("Unable to load cart items. Check browser console for details.");
    } finally {
      setIsLoading(false);
    }
  }

  async function addToCart() {
    if (!productName.trim() || !price.trim()) {
      setErrorMessage("Please enter both product name and price.");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from("cart")
        .insert([{ product_name: productName.trim(), price: price.trim() }]);

      if (error) throw error;

      setProductName("");
      setPrice("");
      await fetchCart();
    } catch (error) {
      console.error("Error adding item:", error);
      setErrorMessage("Unable to add item to Supabase. Check console for details.");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteItem(id) {
    try {
      const { error } = await supabase.from("cart").delete().eq("id", id);
      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error("Error deleting item:", error);
      setErrorMessage("Unable to delete item. Check console for details.");
    }
  }

  async function updateItem(id) {
    try {
      const { error } = await supabase
        .from("cart")
        .update({ price: "₹999" })
        .eq("id", id);
      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error("Error updating item:", error);
      setErrorMessage("Unable to update item. Check console for details.");
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart-page page-container">
      <div className="cart-hero">
        <div>
          <p className="eyebrow">Your cart</p>
          <h1 className="cart-title">Aesthetic cart experience</h1>
          <p className="cart-description">
            Items added from the shop sync to Supabase automatically. You can also add a quick entry below and manage stored items in one beautiful view.
          </p>
        </div>
        <div className="cart-badges">
          <span className="cart-badge">Local items: {items.length}</span>
          <span className="cart-badge badge-secondary">Supabase items: {cartItems.length}</span>
        </div>
      </div>

      <div className="cart-grid">
        <aside className="cart-panel">
          <div className="cart-card">
            <h2>Quick add item</h2>
            <div className="cart-field">
              <label>Product name</label>
              <input
                type="text"
                placeholder="Glow serum"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="cart-field">
              <label>Price</label>
              <input
                type="text"
                placeholder="799"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={addToCart} disabled={isSaving}>
              {isSaving ? "Saving..." : "Add to Supabase"}
            </button>
            {errorMessage && <div className="cart-error">{errorMessage}</div>}
          </div>

          {items.length > 0 && (
            <div className="cart-card">
              <h2>Recent local additions</h2>
              <div className="cart-local-list">
                {items.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="local-item">
                    <span>{item.name || item.product_name}</span>
                    <strong>₹{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <section className="cart-items-panel">
          <div className="cart-card cart-summary-card">
            <div>
              <h2>Supabase cart items</h2>
              <p className="cart-summary-text">Manage your stored cart data from Supabase, including delete and update actions.</p>
            </div>
            <button className="btn btn-secondary" onClick={fetchCart} disabled={isLoading}>
              {isLoading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your Supabase cart is empty. Add items from the shop or quick add form.</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id || `${item.product_name}-${item.price}`} className="cart-item">
                  <div className="item-info">
                    <div className="item-head">
                      <h3>{item.product_name || item.name || "Untitled product"}</h3>
                      <span className="item-price">₹{item.price}</span>
                    </div>
                    <p className="item-meta">ID: {item.id || "N/A"}</p>
                  </div>
                  <div className="item-actions">
                    {item.id && (
                      <>
                        <button className="btn btn-secondary" onClick={() => deleteItem(item.id)}>
                          Delete
                        </button>
                        <button className="btn" onClick={() => updateItem(item.id)}>
                          Update price
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Cart;
