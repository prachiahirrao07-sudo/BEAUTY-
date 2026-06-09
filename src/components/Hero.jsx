import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero hero-centered">
      <div className="hero-content-wrapper">
        <div className="hero-copy">
          <span className="eyebrow">Glowara Skincare</span>
          <h1>AI-powered skincare for glow that feels effortless.</h1>
          <p>
            Upgrade your routine with personalized care, clean ingredients, and a premium sensorial experience.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="btn">
              Shop Bestsellers
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>15k+</strong>
              <p>nourished routines</p>
            </div>
            <div>
              <strong>5 star</strong>
              <p>awarded formulas</p>
            </div>
            <div>
              <strong>Fast</strong>
              <p>hydration results</p>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://keikolynn.com/wp-content/uploads/2018/03/skin-care-all.jpg"
            alt="Luxury skincare collection"
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  );
}