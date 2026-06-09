import React from "react";
import "./Testimonials.css";

export function Testimonials() {
  const reviews = [
    { id: 1, name: "Maya", quote: "My skin has never looked this radiant!" },
    { id: 2, name: "Sam", quote: "Lightweight and effective — love it." },
    { id: 3, name: "Ayesha", quote: "Beautiful packaging and real results." },
  ];

  return (
    <section className="testimonials section">
      <h3 className="testimonials-title">What customers say</h3>

      <div className="testimonials-row">
        {reviews.map((r) => (
          <blockquote key={r.id} className="testimonial">
            <p className="quote">“{r.quote}”</p>
            <cite className="author">— {r.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
