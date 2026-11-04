import React, { useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Fresh Lemon",
    subtitle: "Premium Citrus Export",
    image: "/images/gallery/gallery1.jpeg",
    category: "Fresh Produce",
  },
  {
    id: 2,
    title: "Fresh Red Chilli",
    subtitle: "Premium Chilli Export",
    image: "/images/gallery/gallery2.jpeg",
    category: "Fresh Produce",
  },
  {
    id: 3,
    title: "Fresh Banana",
    subtitle: "Quality Banana Export",
    image: "/images/gallery/gallery3.jpeg",
    category: "Fresh Produce",
  },
  {
    id: 4,
    title: "Fresh Ginger",
    subtitle: "Premium Ginger Export",
    image: "/images/gallery/gallery4.jpeg",
    category: "Fresh Produce",
  },
  {
    id: 5,
    title: "Export Product 05",
    subtitle: "International Quality",
    image: "/images/gallery/gallery5.jpeg",
    category: "Fresh Produce",
  },
  {
    id: 6,
    title: "Export Product 06",
    subtitle: "Global Export Selection",
    image: "/images/gallery/gallery1.jpeg",
    category: "Fresh Produce",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">
            OUR PRODUCTS • OUR QUALITY
          </span>

          <h1>
            Our Export <span>Gallery</span>
          </h1>

          <p>
            Discover our range of carefully selected agricultural
            products, prepared to meet international export standards.
          </p>

          <div className="gallery-hero-line">
            <span></span>
            QUALITY PRODUCTS. GLOBAL REACH.
          </div>
        </div>

        <div className="gallery-hero-decoration">
          <div className="gallery-circle circle-one"></div>
          <div className="gallery-circle circle-two"></div>
          <div className="gallery-circle circle-three"></div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">

        <div className="gallery-heading">
          <span>EXPLORE OUR COLLECTION</span>
          <h2>
            Products We <strong>Export</strong>
          </h2>
          <p>
            Quality agricultural products selected with care
            for our international customers.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                
              </div>

              <div className="gallery-card-info">
                <div>
                  {/* <span className="gallery-card-number">
                    PRODUCT 0{index + 1}
                  </span> */}

                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>
                </div>

            <span className="gallery-card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* BOTTOM BANNER */}
      <section className="gallery-bottom">
        <div>
          <span>OUR PROMISE</span>
          <h2>Bringing Quality Agricultural Products to the World</h2>
          <p>
            Building global connections through quality,
            consistency, and reliable export services.
          </p>
        </div>
      </section>

      {/* IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            &times;
          </button>

          <div
            className="gallery-preview"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-preview-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default GallerySection;
