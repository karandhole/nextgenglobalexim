
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./FruitVegetableSlider.css";

const products = [
  {
    id: 1,
    name: "Alphonso Mangoes",
    category: "Premium Indian Mangoes",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Fresh Red Apples",
    category: "Fresh Fruits",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Fresh Green Broccoli",
    category: "Quality Vegetables",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    category: "Premium Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Fresh Bell Peppers",
    category: "Farm Fresh Vegetables",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Fresh Oranges",
    category: "Citrus Fruits",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "Fresh Tomatoes",
    category: "Fresh Vegetables",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "Fresh Grapes",
    category: "Premium Fresh Fruits",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=85",
  },
];

const FruitVegetableSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="fruit-slider-section">
      <div className="fruit-slider-container">

        {/* HEADING */}
        <div className="fruit-slider-heading">
          <div>
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
              className="fruit-prev"
              aria-label="Previous products"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft size={20} />
            </button>

            <button
              className="fruit-next"
              aria-label="Next products"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          speed={800}
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
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="fruit-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="fruit-product-card">

                <div className="fruit-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="fruit-product-number">
                    0{product.id}
                  </span>

                  <div className="fruit-product-image-overlay">
                    <span>Premium Export Quality</span>
                  </div>
                </div>

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
