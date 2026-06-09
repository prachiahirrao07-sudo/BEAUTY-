import { Hero } from "../components/Hero";
import ProductSpotlight from "../components/ProductSpotlight";
import Brands from "../components/Brands";

export function Home() {
  return (
    <>
      <Brands />
      <Hero />

      <section className="section stats-section">
        <div className="stat-card">
          <span>98%</span>
          <p>of customers see brighter, smoother skin in 14 days</p>
        </div>
        <div className="stat-card">
          <span>AI-led</span>
          <p>routine recommendations crafted for your skin type and goals</p>
        </div>
        <div className="stat-card">
          <span>Premium</span>
          <p>ingredients that deliver hydration, balance, and glow</p>
        </div>
      </section>

      <section className="section feature-grid">
        <div className="feature-card">
          <h3>Smart Skin Matching</h3>
          <p>Find the right formulas with science-backed analysis and simple guidance.</p>
        </div>
        <div className="feature-card">
          <h3>Everyday Rituals</h3>
          <p>Enjoy a clear, effortless routine that fits your morning and night habits.</p>
        </div>
        <div className="feature-card">
          <h3>Confidence Boost</h3>
          <p>Feel radiant with products designed to nourish, refine, and protect.</p>
        </div>
      </section>

      <ProductSpotlight />


      <section className="section highlight-section">
        <div className="highlight-copy">
          <p className="eyebrow">Glowara Promise</p>
          <h2>More than skincare an elevated routine for everyday glow.</h2>
          <p>
            Experience premium care powered by advanced recommendations, clean ingredients, and beautiful packaging.
          </p>
          <ul>
            <li>Personalized routines for every skin concern</li>
            <li>Fast delivery, curated bundles, and refill-friendly travel sets</li>
            <li>Trusted by a community that loves healthy, luminous skin</li>
          </ul>
          <a href="/shop" className="btn">Explore the Collection</a>
        </div>

        <div className="highlight-image">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
            alt="Glowara skincare routine"
          />
        </div>
      </section>
    </>
  );
}

