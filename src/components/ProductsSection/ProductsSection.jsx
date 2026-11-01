
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProductsSection.css";

const products = [
  {
    id: 1,
    number: "01",
    title: "Fruits & Vegetables",
    description:
      "Fresh, carefully sourced Indian produce delivered to international markets.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
    link: "/products/fruits-vegetables",
    label: "Fresh Produce",
    size: "large",
  },
  {
    id: 2,
    number: "02",
    title: "Spices & Herbal Powders",
    description:
      "Authentic Indian flavours, aromatic spices and natural herbal products.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
    link: "/products/spices-herbal-powders",
    label: "Natural Flavours",
    size: "normal",
  },
  {
    id: 3,
    number: "03",
    title: "Dairy Products & Honey",
    description:
      "Selected dairy products and naturally sourced honey for global buyers.",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1000&q=85",
    link: "/products/dairy-products-honey",
    label: "Pure & Natural",
    size: "normal",
  },
  {
    id: 4,
    number: "04",
    title: "Imitation Jewellery",
    description:
      "Beautiful designs and elegant accessories crafted for diverse markets.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
    link: "/products/imitation-jewellery",
    label: "Elegant Designs",
    size: "large",
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-container">

        {/* SECTION HEADING */}
        <div className="products-heading">
          <div className="products-heading-content">
            <span className="products-eyebrow">
              <span></span>
              OUR PRODUCT RANGE
            </span>

            <h2>
              Products We <span>Export</span>
            </h2>

            <p>
              Discover our diverse range of carefully selected products,
              bringing India's quality, tradition and craftsmanship
              to international markets.
            </p>
          </div>

          <Link to="/products/fruits-vegetables" className="products-view-all">
            Explore All Products
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="products-grid">
          {products.map((product) => (
            <Link
              to={product.link}
              className={`product-card product-card-${product.size}`}
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
              />

              <div className="product-card-overlay"></div>

              <div className="product-card-top">
                <span className="product-number">
                  {product.number}
                </span>
                <span className="product-label">
                  {product.label}
                </span>
              </div>

              <div className="product-card-content">
                <span className="product-category-line"></span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <span className="product-explore">
                  Explore Category
                  <span className="product-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="products-bottom">
          <span className="products-bottom-line"></span>
          <p>
            Quality sourced in India. Opportunities delivered worldwide.
          </p>
          <span className="products-bottom-line"></span>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
