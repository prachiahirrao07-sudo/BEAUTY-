import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Navbar() {
  const { items } = useContext(CartContext);
  return (
    <nav className="navbar">
      <h2 className="logo">GLOWARA ✨</h2>

      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>

        <NavLink to="/shop" className={({ isActive }) => isActive ? "link active" : "link"}>
          Shop
        </NavLink>

        <NavLink to="/products" className={({ isActive }) => isActive ? "link active" : "link"}>
          Products
        </NavLink>

        <NavLink to="/quiz" className={({ isActive }) => isActive ? "link active" : "link"}>
          Skin Quiz
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>
          Contact
        </NavLink>
        <div className="cart-link">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "link active" : "link"}>
            Cart
          </NavLink>
          <span className="cart -count">{items.length}</span>
        </div>
      </div>
    </nav>
  );
}