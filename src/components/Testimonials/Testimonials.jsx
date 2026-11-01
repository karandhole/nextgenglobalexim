import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Chetan Deshmukh",
    initials: "CD",
    title: "Consistent Quality Every Season",
    product: "Alphonso Mangoes",
    review:
      "We have been purchasing Alphonso mangoes from them for 8 years now. The quality is consistently excellent—sweet, fibreless, and rich in flavour. Their export-grade standards truly reflect in every shipment.",
  },
  {
    id: 2,
    name: "Rafi Sheikh",
    initials: "RS",
    title: "Top-Grade Onions for Export",
    product: "Onions",
    review:
      "Their onions are of top export quality—clean, uniform size, and long shelf life. The shipment was well-packed and delivered on time. Excellent supplier for anyone dealing in bulk onion exports.",
  },
  {
    id: 3,
    name: "Sunil Kumar",
    initials: "SK",
    title: "Pure, Aromatic & High Quality",
    product: "Honey & Ghee",
    review:
      "I purchased their natural honey and traditional ghee, and both products were exceptional. The honey is rich and pure with no artificial sweetness, and the ghee has a wonderful aroma and authentic taste. Truly premium quality products.",
  },
  {
    id: 4,
    name: "Mahesh Kadam",
    initials: "MK",
    title: "Exceptional Taste & Authentic Quality",
    product: "Konkan Alphonso Mangoes",
    review:
      "These Alphonso mangoes are truly the best I've ever tasted. Naturally sweet, perfectly ripe, and 100% authentic from Konkan. Every box arrived fresh, neatly packed, and export quality. Highly recommended for anyone looking for genuine Alphonso mangoes.",
  },
  {
    id: 5,
    name: "Aditi Roy",
    initials: "AR",
    title: "Bright, Sweet & Fresh",
    product: "Pomegranates",
    review:
      "The pomegranates were bright red, sweet, and full of juicy arils. Very clean packing and excellent size. Perfect for both home use and resale. Great quality and freshness!",
  },
  {
    id: 6,
    name: "Abhilash",
    initials: "A",
    title: "Fresh, Juicy & Premium Grade",
    product: "Alphonso Mangoes",
    review:
      "I ordered Alphonso mangoes for my family and we were amazed by the quality. Each mango was uniform, aromatic, and incredibly juicy. The premium packaging and timely delivery show their professionalism. A real taste of Konkan!",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Section heading */}

        <div className="testimonials-heading">
          <span className="testimonials-eyebrow">
            CUSTOMER EXPERIENCES
          </span>

          <h2>
            What Our Clients <span>Say About Us</span>
          </h2>

          <p>
            Trust built through quality products, reliable
            shipments and lasting business relationships.
          </p>
        </div>

        {/* Slider */}

        <div className="testimonial-slider-wrapper">

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={25}
            loop={true}
            speed={750}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">

                  <div className="testimonial-card-top">
                    <div className="testimonial-quote-icon">
                      <Quote size={25} />
                    </div>

                    <div className="testimonial-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill="#F5B82E"
                          color="#F5B82E"
                        />
                      ))}
                    </div>
                  </div>

                  <span className="testimonial-product">
                    {item.product}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="testimonial-review">
                    “{item.review}”
                  </p>

                  <div className="testimonial-divider"></div>

                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {item.initials}
                    </div>

                    <div>
                      <h4>{item.name}</h4>
                      <span>Customer Review</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider controls */}

          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft size={19} />
            </button>

            <div className="testimonial-pagination"></div>

            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight size={19} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;