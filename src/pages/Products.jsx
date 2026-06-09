import { ProductCard } from "../components/ProductCard";

const productCollections = [
    {
         name: "Glow Serum",
         price: "799",
         rating: 5,
          img: "https://image-optimizer-reg.production.sephora-asia.net/images/product_images/1_Product_3378870195537-Sephora-Collection-Glow-Super-Bright_8cbe00a29f4c08d00e45cb493f5d0d6daf9a77c4_1755168304.png",
  },


 {
    name: "Hydra Moisturizer",
    price: "599",
    rating: 4,
    img: "https://i.etsystatic.com/27597164/r/il/d3226b/6178600936/il_fullxfull.6178600936_kftg.jpg",
  },
  {
    name: "Night Repair Cream",
    price: "999",
    rating: 5,
    img: "https://moduledm.byethost16.com/wp-content/uploads/2025/08/Night-Cream.jpg"
  },
  
];

export function Products() {
  return (
    <div className="products-page">
      <section className="section shop-header">
        <div>
          <p className="eyebrow">Shop More</p>
          <h2>Curated skincare picks for every skin journey</h2>
          <p>
            Discover Glowara top-rated essentials and routine bundles, presented with clear benefits and skin-friendly formulas.
          </p>
        </div>
        <div className="shop-banner">
          <img
            src="https://img.freepik.com/premium-photo/young-beautiful-lady-doing-makeup-with-soft-pink-blush-natural-flush_1218867-9242.jpg"
            alt="Glowara product collection"
          />
        </div>
      </section>

      <section className="section feature-grid">
        <div className="feature-card">
          <h3>Daily Essentials</h3>
          <p>Lightweight formulas to hydrate, protect, and maintain a balanced glow.</p>
        </div>
        <div className="feature-card">
          <h3>Treatments & Serums</h3>
          <p>Targeted care for texture, dark spots, and sensitive skin with gentle actives.</p>
        </div>
        <div className="feature-card">
          <h3>Routine Bundles</h3>
          <p>Complete sets curated for every skin concern, from glow to calm and clarity.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Top picks</p>
          <h2>Popular products loved by our Glowara community</h2>
        </div>
        <div className="grid">
          {productCollections.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
