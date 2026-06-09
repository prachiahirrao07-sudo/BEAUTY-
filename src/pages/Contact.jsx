export function Contact() {
  return (
    <section className="section contact-page">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h1>Let's make your skincare routine feel effortless.</h1>
          <p>
            Reach out for routine advice, shipping questions, or product recommendations. Our team is here to help you glow.
          </p>
          <div className="contact-info-cards">
            <div>
              <strong>hello@glowara.com</strong>
              <p>Customer support answers within 24 hours.</p>
            </div>
            <div>
              <strong>+91 98765 43210</strong>
              <p>Call Monday to Friday, 9am–6pm IST.</p>
            </div>
            <div>
              <strong>Keep in touch</strong>
              <p>Follow us for new launches, care tips, and exclusive offers.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea placeholder="How can we help you?" rows="5"></textarea>
            </label>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-image-block">
        <img
          src="https://images.unsplash.com/photo-1530234240072-3af5f39f0c80?auto=format&fit=crop&w=1200&q=80"
          alt="Customer support skincare"
        />
      </div>
    </section>
  );
}
