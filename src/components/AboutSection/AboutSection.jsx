
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe2 } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image-wrapper">
          <div className="about-image">
            <img
              src="images/gallery/about2.jpg"
              alt="Fresh Indian agricultural produce for export"
            />
          </div>

          <div className="about-image-badge">
            <Globe2 size={25} />
            <div>
              <strong>Global Reach</strong>
              <span>Connecting Markets Worldwide</span>
            </div>
          </div>

          <div className="about-image-decoration"></div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-tagline">
            <span></span>
            WHO WE ARE
          </span>

          <h2>
            Bringing India's Finest
            <span> Products to the World</span>
          </h2>

          <p className="about-description">
            NEXTGEN GLOBAL IMPORTERS AND EXPORTERS established by Mrs Archana S. Surve & her family, our company proudly delivers trusted export solutions worldwide. With a vision to create a platform that not only connects Indian products with international buyers but also uplifts local farmers, artisans, and producers. Her leadership ensures the company operates with professionalism, ethical practices, and customer-first values.
          </p>

          <p className="about-description">
            As trusted exporters of Ratnagiri Alphonso mangoes, we deliver GI-certified, export-quality mangoes and mango products worldwide. Our export portfolio also includes agricultural produce, Indian spices, millets, dairy products, imitation jewellery, home décor items, and more.
          </p>

          <div className="about-bottom">
            <Link to="/about-us" className="about-btn">
              Discover Our Story
              <ArrowUpRight size={19} />
            </Link>

            <span className="about-highlight">
              Quality • Trust • Global Reach
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
