
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import "./MainSlider.css";

const slides = [
  {
    id: 1,
    subtitle: "YOUR TRUSTED GLOBAL EXPORT PARTNER",
    title: "Worldwide Exporters of Premium GI-Certified ",
    highlight: "Konkan Alphonso Mangoes",
    // description:
    //   "Bringing India's finest products to international markets with quality, reliability and excellence.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 2,
    subtitle: "QUALITY YOU CAN TRUST",
    title: "Freshness From",
    highlight: "India To The World",
    
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 3,
    subtitle: "EXPANDING GLOBAL OPPORTUNITIES",
    title: "Global Exporters of Pure and Authentic ",
    highlight: "Konkan Garcinia Indica",
    
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=85",
  },
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-slider">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${
            currentSlide === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          aria-hidden={currentSlide !== index}
        >
          <div className="slide-overlay"></div>

          <div className="slider-container">
            <div className="slide-content">

              <span className="slide-subtitle">
                <span className="subtitle-line"></span>
                {slide.subtitle}
              </span>

              <h1>
                {slide.title}
                <br />
                <span>{slide.highlight}</span>
              </h1>

              <p>{slide.description}</p>

              <Link
                to="/contact"
                className="slider-contact-btn"
                tabIndex={currentSlide === index ? 0 : -1}
              >
                Contact Us
                <ArrowUpRight size={19} />
              </Link>

            </div>
          </div>
        </div>
      ))}

      {/* Slider Navigation */}
      <div className="slider-navigation">

        <button
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slider-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index}
            />
          ))}
        </div>

        <button
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* Slide Counter */}
      <div className="slider-counter">
        <span>0{currentSlide + 1}</span>
        <span className="counter-divider"></span>
        <span>0{slides.length}</span>
      </div>

    </section>
  );
};

export default MainSlider;
