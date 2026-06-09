import { ProductCard } from "../components/ProductCard";

const products = [
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
  {
    name: "Radiant Cleanser",
    price: "449",
    rating: 4,
    img: "https://down-my.img.susercontent.com/file/my-11134207-7r991-lmvh0ykchl8z88"
  },
  {
    name: "Calm Face Mist",
    price: "499",
    rating: 5,
    img: "https://sohaticare.com/cdn/shop/files/EVI-150079calm_2048x2048.jpg?v=1708508120",
  },
  {
    name: "Renew Body Oil",
    price: "899",
    rating: 4,
    img: "",
    img: "https://herbsnbutterscosmetics.com/cdn/shop/files/RenewBodyOil_800x1200px_1200x1200.png?v=1707109191",
  },
   {
    name: "Sunscreen",
    price: "599",
    rating: 4,
    img: "https://www.health.harvard.edu/media/content/images/p1_Sunscreen_W1807_gi172423347.jpg",
  },
   {
    name: "Blush ",
    price: "449",
    rating: 4,
    img: "https://www.yslbeauty.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw344674ad/images/PACKSHOTS/MAKEUP/FACE_MAKEUP/POWDER/WW-51348YSL_mmb_bold_blush/3614274254396_mmbbb_shade-42_main.png",
    
  },
   {
    name: "Foundation",
    price: "699",
    rating: 4,
    img: "https://beautytidbits.com/wp-content/uploads/2023/02/Revlon-Illuminance-Skin-Caring-Foundation-swatches-1024x1016.jpg",
  },
   {
    name: "Concealer",
    price: "300",
    rating: 4,
    img: "https://img-cdn.thepublive.com/filters:format(webp)/elle-india/media/post_attachments/wlke2cbybljx/7iEVVIZgvXh1YZMiEnKP2h/70ab872a59fc97353fe831f2aa1cd332/016_220002_BSC_SL_HERO_CONCEALER_SF_2205_-229920.jpg",
  },
   {
    name: "Kajal",
    price: "229",
    rating: 4,
    img: "https://down-my.img.susercontent.com/file/a67447bcd23d4feb19f1400c556dfb2d",
  },
   {
    name: "lipstick",
    price: "349",
    rating: 4,
    img: "https://img.freepik.com/premium-photo/lipstick-cosmetic-photography_981061-10883.jpg"
   },
   {
    name: "primer",
    price: "449",
    rating: 4,
    img: "https://www.byrdie.com/thmb/CLUgquAUg8ip7w9aDBYB5-glJ_s=/1400x1400/filters:no_upscale():max_bytes(150000):strip_icc()/e.l.f.HydratingFacePrimer-5c62ebca46e0fb000144282e.jpg",
  },
   {
    name: "Setting spray",
    price: "539",
    rating: 4,
    img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa36c132f/ProductImages/2023/FACE/MARSHMELLOW-SETTING-SPRAY/NYX-PMU-Makeup-Face-SETTING-SPRAY-MARSHMELLOW-MATTE-SETTING-SPRAY-MSS05-0800897255077-PackshotWithTexture.jpg",
  },
  {
    name: "Body wash",
    price: "599",
    rating: 4,
    img: "https://m.media-amazon.com/images/I/61y-ciVAQXL._SL1500_.jpg",
  },
   {
    name: "highlighter",
    price: "399",
    rating: 4,
    img: "https://i5.walmartimages.com/seo/P-Base-3-Give-Glow-Cosmetics-Hard-Candy-Makeup-Lip-Highlighter-Contouring-5-Color-Natural-Highlighter-Disc-5-Colors-Highlighter-Makeup-Set-Color-Corr_c4385154-518d-48a8-920c-5f36e08ea4eb.225e59f49412a29eb19440aaf0e4e79b.jpeg",
  },
   
   
];

export function Shop() {
  return (
    <div className="shop">
      <section className="section shop-header">
        <div>
          <p className="eyebrow">Discover</p>
          <h2>Glowara essentials for every glow routine</h2>
          <p>
            Curated skincare picks with clean ingredients, visible results, and luxurious texture.
          </p>
        </div>
        <div className="shop-banner">
          <img
            src="https://blackhealthmatters.com/wp-content/uploads/2021/05/AdobeStock_413900297-e1621604382828.jpeg"
            alt="Glowara collection"
          />
        </div>
      </section>

      <section className="section feature-grid shop-features">
        <div className="feature-card">
          <h3>Glow Boosters</h3>
          <p>Serums and essences for brighter, more even-looking skin.</p>
        </div>
        <div className="feature-card">
          <h3>Hydration Heroes</h3>
          <p>Daily creams and gels that lock in moisture without heaviness.</p>
        </div>
        <div className="feature-card">
          <h3>Calm & Repair</h3>
          <p>Soothing formulas for sensitive, redness-prone, and stressed skin.</p>
        </div>
      </section>

      <section className="section section-heading">
        <p className="eyebrow">Selected picks</p>
        <h2>Shop by concern or choice</h2>
      </section>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
