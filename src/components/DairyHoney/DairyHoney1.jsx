import React from "react";
import {
  ArrowUpRight,
  Leaf,
  ShieldCheck,
  Globe2,
  Droplets,
  Sparkles,
  Heart,
  CheckCircle2,
  Milk,
  FlaskConical,
  PackageCheck,
} from "lucide-react";

import "./DairyHoney1.css";

const products = [
  {
    id: "01",
    name: "Curd",
    subtitle: "Traditional Indian Yogurt",
    description:
      "A timeless Indian dairy favourite, crafted from fresh, pure milk to deliver a creamy texture and naturally refreshing taste.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/dahi-768x768.jpg",
    tag: "Fresh Dairy",
    highlights: [
      "Made from fresh, farm-sourced milk",
      "Probiotic-rich and hygienically prepared",
      "Ideal for lassi, buttermilk and traditional dishes",
      "A natural source of calcium and protein",
    ],
    number: "01",
  },
  {
    id: "02",
    name: "Ghee",
    subtitle: "Golden Indian Clarified Butter",
    description:
      "Celebrated for its golden colour, rich aroma and authentic taste, our ghee brings the essence of traditional Indian kitchens to global markets.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/elementor/thumbs/ghee-rfre2pesffghyqpusrn19wrfvlka389sgp1quuebh8.jpg",
    tag: "Traditional Goodness",
    highlights: [
      "Made from quality cow or buffalo milk",
      "Golden colour and rich, authentic aroma",
      "Natural and preservative-free",
      "A traditional source of energy and healthy fats",
    ],
    number: "02",
  },
  {
    id: "03",
    name: "Honey",
    subtitle: "Nature's Golden Sweetness",
    description:
      "Naturally sweet and carefully sourced, our honey captures the richness of nature in every drop, with options suited to diverse international markets.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/honey.jpg",
    tag: "Pure & Natural",
    highlights: [
      "Pure, natural and ethically sourced",
      "Quality-tested for purity and safety",
      "Multifloral, wild, forest and monofloral varieties",
      "Suitable for food, herbal and wellness applications",
    ],
    number: "03",
  },
];

const qualityFeatures = [
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "Careful product selection and quality-focused handling at every stage.",
  },
  {
    icon: Leaf,
    title: "Natural Goodness",
    description:
      "Products inspired by traditional Indian food culture and natural ingredients.",
  },
  {
    icon: Globe2,
    title: "Global Supply",
    description:
      "Export-oriented product sourcing for buyers and markets worldwide.",
  },
  {
    icon: PackageCheck,
    title: "Export Ready",
    description:
      "Packaging and supply coordination based on buyer requirements.",
  },
];

function DairyHoney1() {
  return (
    <main className="dairy-page">
      {/* HERO */}
      <section className="dairy-hero">
        <div className="dairy-hero-pattern" />

        <div className="dairy-hero-content">
          <span className="dairy-eyebrow">
            <span className="dairy-eyebrow-line" />
            FROM INDIA TO THE WORLD
          </span>

          <h1>
            Dairy Heritage.
            <br />
            <span>Nature's Finest.</span>
          </h1>

          <p>
            Discover the richness of Indian dairy traditions and the natural
            sweetness of carefully sourced honey. Quality products,
            thoughtfully presented for global markets.
          </p>

          <a href="#dairy-products" className="dairy-hero-btn">
            Explore Our Products
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="dairy-hero-visual">
          <div className="dairy-hero-image-frame">
            <img
              src="https://nextgenglobalexim.com/wp-content/uploads/2025/12/dahi-768x768.jpg"
              alt="Traditional Indian curd"
            />
          </div>

          <div className="dairy-hero-stamp">
            <span>PURE</span>
            <span className="stamp-divider" />
            <span>TRADITIONAL</span>
            <span className="stamp-divider" />
            <span>QUALITY</span>
          </div>

          <div className="dairy-hero-side-note">
            <span>01 — 03</span>
            <span>DAIRY & NATURAL PRODUCTS</span>
          </div>
        </div>

        <div className="dairy-hero-bottom">
          <span>TRADITION MEETS QUALITY</span>
          <span>CURD / GHEE / HONEY</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="dairy-intro">
        <div className="dairy-intro-label">
          <span>OUR PRODUCT COLLECTION</span>
          <div />
        </div>

        <div className="dairy-intro-content">
          <h2>
            A taste of tradition,
            <br />
            <span>made for the world.</span>
          </h2>

          <p>
            We supply premium-quality curd (yogurt), ghee and honey that bring
            the rich taste of Indian dairy excellence and natural sweetness
            to international markets. Rooted in traditional food culture and
            supported by quality-conscious sourcing, our collection is
            designed for buyers who value authenticity and consistency.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="dairy-products" id="dairy-products">
        <div className="dairy-section-heading">
          <div>
            <span className="dairy-section-kicker">THE COLLECTION</span>
            <h2>Our Finest Selections</h2>
          </div>

          <p>
            Three timeless products.
            <br />
            One commitment to quality.
          </p>
        </div>

        <div className="dairy-product-list">
          {products.map((product, index) => (
            <article
              className={`dairy-product-card ${
                index % 2 !== 0 ? "dairy-product-reverse" : ""
              }`}
              key={product.id}
            >
              <div className="dairy-product-image">
                <img src={product.image} alt={product.name} loading="lazy" />

                <span className="dairy-image-number">
                  {product.number} / 03
                </span>

                <span className="dairy-image-tag">{product.tag}</span>
              </div>

              <div className="dairy-product-info">
                <div className="dairy-product-topline">
                  <span>{product.subtitle}</span>
                  <span>{product.id}</span>
                </div>

                <h3>{product.name}</h3>

                <p className="dairy-product-description">
                  {product.description}
                </p>

                <div className="dairy-product-divider" />

                <span className="dairy-highlights-label">
                  PRODUCT HIGHLIGHTS
                </span>

                <ul className="dairy-highlights">
                  {product.highlights.map((highlight, i) => (
                    <li key={i}>
                      <CheckCircle2 size={17} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919511614528?text=${encodeURIComponent(
                    `Hello NextGen Global Exim, I am interested in your ${product.name} product. Please share more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dairy-product-link"
                >
                  Enquire About {product.name}
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

<section className="dairy-cta">
  <div className="dairy-cta-box">
    <span>✦ LET'S CONNECT</span>
    <h2>Looking for Quality Dairy & Honey?</h2>
    <p>Partner with us for premium Indian products and global supply.</p>
    <a href="https://wa.me/919511614528" target="_blank" rel="noopener noreferrer">
      Enquire Now <ArrowUpRight size={18} />
    </a>
  </div>
</section>


    </main>
  );
}

export default DairyHoney1;