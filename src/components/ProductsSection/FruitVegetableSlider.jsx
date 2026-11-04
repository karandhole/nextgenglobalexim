import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import "./FruitVegetableSlider.css";

const products = [
  {
    id: 1,
    name: "Alphonso Mangoes",
    category: "Premium Indian Mangoes",
    image: "images/products/p7.jpg",
  },
  {
    id: 2,
    name: "Fresh Pineapple",
    category: "Fresh Tropical Fruits",
    image: "images/products/p2.jpg",
  },
  {
    id: 3,
    name: "Fresh Bitter Gourd",
    category: "Fresh Vegetables",
    image: "images/products/p3.jpg",
  },
  {
    id: 4,
    name: "Fresh Lady's Finger (Okra)",
    category: "Fresh Vegetables",
    image: "images/products/p4.jpg",
  },
  {
    id: 5,
    name: "Fresh Onion",
    category: "Fresh Vegetables",
    image: "images/products/p5.jpg",
  },
  {
    id: 6,
    name: "Fresh Oranges",
    category: "Fresh Citrus Fruits",
    image: "images/products/p6.jpg",
  },
  {
    id: 7,
    name: "Fresh Pomegranate",
    category: "Fresh Fruits",
    image: "images/products/p1.jpg",
  },
  {
    id: 8,
    name: "Fresh Garlic",
    category: "Fresh Vegetables",
    image: "images/products/p8.jpg",
  },
  {
    id: 9,
    name: "Fresh Carrot",
    category: "Fresh Vegetables",
    image: "images/products/p9.jpg",
  },
];

const FruitVegetableSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="fruit-slider-section">
      <div className="fruit-slider-container">

        {/* HEADING */}
        <div className="fruit-slider-heading">
          <div className="fruit-slider-heading-content">
            <span className="fruit-slider-eyebrow">
              <span></span>
              FRESH FROM INDIA
            </span>

            <h2>
              Fruits & Vegetables
              <span> We Export</span>
            </h2>

            <p>
              Discover our range of fresh, carefully selected fruits
              and vegetables, sourced to meet the expectations of
              international markets.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="fruit-slider-navigation">
            <button
              type="button"
              className="fruit-prev"
              aria-label="Previous products"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              className="fruit-next"
              aria-label="Next products"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* PRODUCT SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          slidesPerGroup={1}
          centeredSlides={false}
          spaceBetween={22}
          loop={true}
          speed={800}
          watchOverflow={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".fruit-slider-pagination",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            560: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="fruit-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="fruit-product-card">

                {/* IMAGE */}
                <div className="fruit-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="fruit-product-number">
                    {String(product.id).padStart(2, "0")}
                  </span>

                  <div className="fruit-product-image-overlay">
                    <span>Premium Export Quality</span>
                  </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="fruit-product-info">
                  <span className="fruit-product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <span className="fruit-product-line"></span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION */}
        <div className="fruit-slider-pagination"></div>

        {/* FOOTER */}
        <div className="fruit-slider-footer">
          <p>
            Carefully sourced. Quality checked. Globally delivered.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FruitVegetableSlider;
