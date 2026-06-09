export function About() {
  return (
    <section className="section about-page">
      <div className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">About Glowara</p>
          <h1>We create skincare that feels modern, thoughtful, and effective.</h1>
          <p>
            Glowara blends smart skincare with clean formulas and luxurious rituals. Our mission is to help every skin type feel confident, calm, and radiant.
          </p>
          <div className="about-list">
            <div>
              <strong>Skin-first science</strong>
              <p>Formulas built around hydration, barrier repair, and glow without irritation.</p>
            </div>
            <div>
              <strong>Beauty made simple</strong>
              <p>Curated routines that are easy to follow, effective, and feel beautiful.</p>
            </div>
            <div>
              <strong>Responsible packaging</strong>
              <p>Thoughtful design with refill-ready jars and gentle ingredients.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
            alt="About Glowara skincare"
          />
        </div>
      </div>

      <div className="about-values">
        <div className="value-card">
          <h3>Designed for skin confidence</h3>
          <p>We offer products that make skincare feel like a daily ritual instead of a chore.</p>
        </div>
        <div className="value-card">
          <h3>Trusted by glowing customers</h3>
          <p>Thousands of reviews praise our formulas for softness, clarity, and long-term hydration.</p>
        </div>
        <div className="value-card">
          <h3>Built on clean, effective beauty</h3>
          <p>Every ingredient is chosen for real results and a joyful sensorial experience.</p>
        </div>
      </div>
    </section>
  );
}
