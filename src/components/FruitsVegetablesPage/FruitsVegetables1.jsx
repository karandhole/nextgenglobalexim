import React from "react";
import "./FruitsVegetables1.css";

const products = [
  {
    id: 1,
    name: "Konkan Alphonso Mangoes",
    category: "Premium Tropical Fruits",
    description:
      "World-class Konkan Alphonso Mangoes, GI Certified, organic and carbide-free.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/11/mango_pic5-1.jpg",
    tag: "GI Certified",
  },
  {
    id: 2,
    name: "Bhagwa Pomegranate",
    category: "Premium Indian Fruits",
    description:
      "Fresh Bhagwa Pomegranates sourced from the fertile farms of Maharashtra.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/11/pomegenerate1-scaled.jpg",
    tag: "Farm Fresh",
  },
  {
    id: 3,
    name: "Fresh Pineapples",
    category: "Tropical Fruits",
    description:
      "Export-quality pineapples carefully selected for freshness and taste.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/11/pine_apple-rotated.jpg",
    tag: "Export Quality",
  },
  {
    id: 4,
    name: "Indian Gooseberry (Amla)",
    category: "Nutrient-Rich Fruits",
    description:
      "Premium Indian Gooseberries harvested fresh for natural nourishment.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/amla-768x1024.jpg",
    tag: "Natural Goodness",
  },
  {
    id: 5,
    name: "Fresh Papaya",
    category: "Tropical Fruits",
    description:
      "Naturally sweet papayas, carefully selected for quality and freshness.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/pappya.jpg",
    tag: "Fresh Harvest",
  },
  {
    id: 6,
    name: "Fresh Sweet Lime",
    category: "Citrus Fruits",
    description:
      "Refreshing sweet lime packed with citrus goodness and natural flavor.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/sweet_lime-rotated.jpg",
    tag: "Citrus Fresh",
  },
  {
    id: 7,
    name: "Assorted Fresh Vegetables",
    category: "Fresh Vegetables",
    description:
      "A carefully selected assortment of fresh vegetables for global markets.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/mix_vegetables.jpg",
    tag: "Farm Selection",
  },
  {
    id: 8,
    name: "Fresh Okra (Lady Finger)",
    category: "Fresh Vegetables",
    description:
      "Premium farm-fresh okra selected for its quality, freshness and taste.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/okra.jpg",
    tag: "Farm Fresh",
  },
  {
    id: 9,
    name: "Fresh Carrots",
    category: "Fresh Vegetables",
    description:
      "Healthy farm-fresh carrots selected for their natural color and quality.",
    image:
      "https://nextgenglobalexim.com/wp-content/uploads/2025/12/carrot-rotated.jpg",
    tag: "Premium Quality",
  },
];

const FruitsVegetables1 = () => {
  return (
    <section className="fv-section">
      <div className="fv-container">

        {/* Section Heading */}
        <div className="fv-heading">
          <span className="fv-eyebrow">
            <span className="fv-eyebrow-line"></span>
            FRESHNESS FROM INDIA
            <span className="fv-eyebrow-line"></span>
          </span>

          <h2>
            Fruits & <span>Vegetables</span>
          </h2>

          <p>
            Discover our premium selection of Indian fruits and vegetables,
            carefully sourced and quality-checked to meet international
            export standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="fv-grid">
          {products.map((product) => (
            <article className="fv-card" key={product.id}>
              <div className="fv-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="fv-product-number">
                  {String(product.id).padStart(2, "0")}
                </span>

                <span className="fv-tag">{product.tag}</span>

                <div className="fv-image-overlay">
                  <span>Premium Export Selection</span>
                </div>
              </div>

              <div className="fv-card-content">
                <span className="fv-category">{product.category}</span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="fv-card-bottom">
                  <span className="fv-quality-dot"></span>
                  <span>Quality Assured</span>
                  <span className="fv-card-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="fv-bottom-banner">
          <div>
            <span className="fv-banner-label">NEXTGEN GLOBAL EXIM</span>
            <h3>Bringing India's Freshness to the World.</h3>
            <p>
              Carefully sourced. Quality checked. Globally delivered.
            </p>
          </div>

          <a href="/contact" className="fv-contact-btn">
            Enquire Now <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FruitsVegetables1;