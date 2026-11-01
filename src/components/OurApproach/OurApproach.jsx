
import {
  ArrowUpRight,
  ShieldCheck,
  Handshake,
  Globe2,
} from "lucide-react";
import "./OurApproach.css";

const OurApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">

        {/* LEFT CONTENT */}
        <div className="approach-content">

          <span className="approach-eyebrow">
            <span className="approach-eyebrow-line"></span>
            OUR APPROACH
          </span>

          <h2>
            Quality-Driven.
            <span> Ethics-Led.</span>
            <br />
            Globally Focused.
          </h2>

          <p className="approach-intro">
            At NEXTGEN Global Importers and Exporters, our approach is
            built on quality, transparency, and long-term partnerships.
            Under the leadership of
            <strong> Mrs. Archana S. Surve</strong>, we follow a
            structured and ethical export process that ensures every
            product meets international standards.
          </p>

          <p className="approach-description">
            From sourcing directly from trusted farmers and producers
            to strict quality checks and reliable logistics, we manage
            every step with precision. Our focus is to deliver consistent
            value to global buyers while supporting local communities.
          </p>

          {/* CORE VALUES */}
          <div className="approach-values">

            <div className="approach-value">
              <div className="approach-value-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3>Quality First</h3>
                <span>Care at every stage</span>
              </div>
            </div>

            <div className="approach-value">
              <div className="approach-value-icon">
                <Handshake size={22} />
              </div>
              <div>
                <h3>Ethical Sourcing</h3>
                <span>Trust and transparency</span>
              </div>
            </div>

            <div className="approach-value">
              <div className="approach-value-icon">
                <Globe2 size={22} />
              </div>
              <div>
                <h3>Global Standards</h3>
                <span>Worldwide commitment</span>
              </div>
            </div>

          </div>

          <div className="approach-bottom">
            <span className="approach-leadership">
              <span className="leadership-dot"></span>
              Led by Mrs. Archana S. Surve
            </span>

            <a href="/about-us" className="approach-link">
              Know More
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="approach-visual">

          <div className="approach-image">
            <img
              src="/images/products/about1.jpg"
              alt="Agricultural fields representing responsible sourcing"
              loading="lazy"
            />
          </div>

          {/* Floating image label */}
          <div className="approach-image-label">
            <div className="approach-label-icon">
              <Globe2 size={25} />
            </div>
            <div>
              <span>OUR COMMITMENT</span>
              <strong>From India to the World</strong>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="approach-image-accent"></div>

          <div className="approach-image-caption">
            <span>01</span>
            <p>Responsible sourcing. Reliable exports.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurApproach;
