
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";

import "./Aboutsection1.css";

const AboutSection1 = () => {
  return (
    <main className="about-page">

      {/* ABOUT INTRO SECTION */}
      <section className="about-intro">
        <div className="about-intro-container">

          {/* LEFT CONTENT */}
          <div className="about-intro-content">

            <div className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              GET TO KNOW US
            </div>

            <h1>
              Connecting India's
              <span> Finest to the World.</span>
            </h1>

            <p className="about-intro-lead">
              <strong>NEXTGEN GLOBAL IMPORTERS AND EXPORTERS</strong> is your
              trusted gateway to India's finest agricultural produce and
              handcrafted treasures. Founded by{" "}
              <strong>Mrs. Archana S. Surve</strong>, we specialize in
              agricultural produce, spices, millets, dairy products,
              imitation jewellery, home decor items and miscellaneous
              products.
            </p>

            <p>
              With a strong network of trusted suppliers, stringent quality
              checks, and seamless logistics, we ensure that every product
              we deliver reflects excellence — on time, every time. From
              spices that tantalize taste buds to grains, fresh produce,
              and unique agri-commodities, our offerings meet the highest
              international standards.
            </p>

            <p>
              At <strong>NEXTGEN GLOBAL EXIM</strong>, we go beyond exporting
              goods — we deliver <strong>quality, reliability, and long-term
              value.</strong> Every shipment is a promise: a promise of trust,
              precision, and the authentic flavors and craftsmanship of India.
            </p>

            <p>
              Partner with us and experience a journey where India's finest
              meets the world's expectations.
            </p>

            <a href="/contact" className="about-intro-btn">
              Connect With Us
              <ArrowUpRight size={19} />
            </a>

            {/* TRUST POINTS */}
            <div className="about-trust-points">
              <div>
                <ShieldCheck size={21} />
                <span>Quality Assurance</span>
              </div>

              <div>
                <Globe2 size={21} />
                <span>Global Connections</span>
              </div>

              <div>
                <Truck size={21} />
                <span>Reliable Logistics</span>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="about-intro-visual">

            <div className="about-image-frame">
              <img
                src="/images/products/about1.jpg"
                alt="International export operations and quality Indian products"
              />

              <div className="about-image-overlay">
                <span>OUR COMMITMENT</span>
                <h3>Quality Without Compromise.</h3>
              </div>
            </div>

           
            <div className="about-image-accent"></div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutSection1;
