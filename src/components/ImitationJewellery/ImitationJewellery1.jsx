
import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Gem,
  PackageCheck,
  Globe2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import "./ImitationJewellery1.css";

const jewelleryFeatures = [
  {
    icon: <Gem />,
    title: "Premium Finish",
    text: "Crafted with quality materials for an elegant real-jewellery appearance.",
  },
  {
    icon: <Heart />,
    title: "Skin-Friendly",
    text: "Comfort-focused materials and finishes for comfortable wear.",
  },
  {
    icon: <Sparkles />,
    title: "Affordable Luxury",
    text: "Glamorous styles that combine elegance, affordability and value.",
  },
  {
    icon: <ShieldCheck />,
    title: "Durable & Long-Lasting",
    text: "Quality-focused finishing for lasting beauty.",
  },
];

const jewelleryRange = [
  "Kundan Sets & Polki Necklaces",
  "CZ / American Diamond Jewellery",
  "Brass & Copper-Based Ornaments",
  "Antique Gold & Silver Plated Designs",
  "Bangles, Earrings, Finger Rings & Bracelets",
  "Bridal Collections & Occasion Wear",
  "Everyday Minimal Jewellery",
];

function ImitationJewellery1() {
  return (
    <main className="ij-page">

      {/* HERO */}
      <section className="ij-hero">
        <div className="ij-hero-content">
          <span className="ij-label">PREMIUM IMITATION JEWELLERY</span>

          <h1>
            Adorn Elegance.
            <span> Express Confidence.</span>
          </h1>

          <p>
            Discover beautifully crafted imitation jewellery with elegant
            designs, long-lasting shine and skin-friendly materials.
            A perfect blend of affordability, style and craftsmanship
            for global buyers.
          </p>

          <a href="#ij-collection" className="ij-button">
            Explore Collection <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="ij-hero-image">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85"
            alt="Premium imitation jewellery"
          />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ij-intro">
        <span className="ij-label">STYLE THAT SPEAKS WITHOUT WORDS</span>
        <h2>Imitation Jewellery – Style That Speaks Without Words</h2>
        <p>
          Our imitation jewellery collection brings together premium
          craftsmanship, modern artistry and timeless Indian tradition.
          Designed to complement every style, each piece enhances your
          look—whether casual, festive or glamorous.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ij-features">
        <div className="ij-section-heading">
          <span className="ij-label">OUR QUALITY PROMISE</span>
          <h2>Why Choose Our Imitation Jewellery?</h2>
        </div>

        <div className="ij-feature-grid">
          {jewelleryFeatures.map((item) => (
            <div className="ij-feature-card" key={item.title}>
              <div className="ij-feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section className="ij-collection" id="ij-collection">
        <div className="ij-section-heading">
          <span className="ij-label">EXPLORE OUR COLLECTION</span>
          <h2>Our Jewellery Range Includes</h2>
        </div>

        <div className="ij-collection-layout">
          <div className="ij-collection-image">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
              alt="Elegant jewellery collection"
              loading="lazy"
            />
          </div>

          <div className="ij-range-list">
            {jewelleryRange.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DEMAND */}
      <section className="ij-global">
        <div className="ij-global-content">
          <span className="ij-label">GLOBAL DEMAND</span>
          <h2>Indian Craftsmanship for Global Markets</h2>
          <p>
            With the growing love for Indian craftsmanship globally,
            imitation jewellery has become a popular fashion and export
            category. We focus on careful packaging and dependable
            export coordination.
          </p>
        </div>

        <div className="ij-global-points">
          <div>
            <PackageCheck />
            <h3>Strong Packaging</h3>
          </div>
          <div>
            <ShieldCheck />
            <h3>Moisture Protection</h3>
          </div>
          <div>
            <Globe2 />
            <h3>Secure Logistics</h3>
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="ij-market">
        <div>
          <span className="ij-label">OUR BUYERS</span>
          <h2>Perfect For</h2>
        </div>

        <ul>
          <li>Fashion Retailers & Boutiques</li>
          <li>Online Jewellery Stores</li>
          <li>Festive, Wedding & Gifting Markets</li>
          <li>Bulk Buyers & Customized Designs</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="ij-cta">
        <div className="ij-cta-box">
          <span>LET'S CONNECT</span>
          <h2>Your Trusted Partner in Style</h2>
          <p>
            We bring creativity, culture and quality together—so
            customers can sparkle every day with confidence and grace.
          </p>
          <a
            href="https://wa.me/919511614528"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire Now <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default ImitationJewellery1;
