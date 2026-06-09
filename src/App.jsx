import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";

import "./App.css";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Products } from "./pages/Products";
import { Quiz } from "./pages/Quiz";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

export function App() {
  return (
    <CartProvider>
      <div className="app">
      <div className="hearts-bg">
        <span className="heart"> 💖</span>
        <span className="heart" style={{ left: "15%", animationDuration: "9s" }}> ❤️</span>
        <span className="heart" style={{ left: "35%", animationDuration: "11s" }}> 💗</span>
        <span className="heart" style={{ left: "60%", animationDuration: "10s" }}> 💖</span>
        <span className="heart" style={{ left: "80%", animationDuration: "12s" }}>❤️</span>
      </div>

      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

        <Footer />
      </div>
    </CartProvider>
  );
}