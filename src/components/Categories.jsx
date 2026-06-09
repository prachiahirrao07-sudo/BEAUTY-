import React from "react";
import "./Categories.css";

export function Categories() {
  const cats = [
    { id: 1, title: "Cleansers", subtitle: "Gentle & effective" },
    { id: 2, title: "Serums", subtitle: "Active formulations" },
    { id: 3, title: "Moisturizers", subtitle: "Hydrate & protect" },
    { id: 4, title: "Masks", subtitle: "Treat & restore" },
  ];

  return (
    <section className="categories section">
      <h3 className="categories-title">Shop by Category</h3>

      <div className="categories-grid">
        {cats.map((c) => (
          <div key={c.id} className="category-card">
            <div className="category-emoji">✨</div>
            <div className="category-copy">
              <h4>{c.title}</h4>
              <p>{c.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
