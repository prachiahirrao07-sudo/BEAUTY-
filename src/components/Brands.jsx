import React from "react";
import "./Brands.css";

export function Brands() {
  const brands = ["Channel", "plam", "Dior", "Cetaphill", "Dot & Key"];

  return (
    <section className="brands">
      <div className="brands-inner">
        {brands.map((b) => (
          <a key={b} href="#" className="brand-link" data-initial={b.charAt(0)}>
            {b}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Brands;
