
import {
  ArrowUpRight,
  ArrowRight,
  Globe2,
  Mail,
  Phone,
  MessageCircle,
  Clock3,
  Ship,
  PackageCheck,
  Send,
  Anchor,
  Headphones,
} from "lucide-react";

import "./Contact.css";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      data.get("subject") || "Export Business Enquiry"
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}
Company: ${data.get("company")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Country: ${data.get("country")}
Product: ${data.get("product")}

Message:
${data.get("message")}`
    );

    window.location.href =
      `mailto:asurve@nextgenglobalexim.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="export-contact">

      {/* PREMIUM CONTACT HERO */}
      <section className="export-contact-hero">
        <div className="export-contact-container">

          <div className="export-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </div>

          <div className="export-hero-layout">

            {/* LEFT CONTENT */}
            <div className="export-hero-text">

              <div className="export-eyebrow">
                <span></span>
                YOUR GLOBAL TRADE PARTNER
              </div>

              <h1>
                Let's Build
                <br />
                <span>Global Connections.</span>
              </h1>

              <p>
                Looking for premium Indian products and a reliable
                export partner? NEXTGEN GLOBAL IMPORTERS AND EXPORTERS
                is ready to connect with international buyers,
                suppliers and business partners.
              </p>

              <div className="export-hero-actions">

                <a href="#export-enquiry" className="export-primary-btn">
                  Send an Enquiry
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="https://wa.me/919511614528"
                  target="_blank"
                  rel="noreferrer"
                  className="export-secondary-btn"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>

              </div>

              <div className="export-hero-trust">

                <div>
                  <Globe2 />
                  <span>Worldwide Business Connections</span>
                </div>

                <div>
                  <PackageCheck />
                  <span>Quality Indian Products</span>
                </div>

              </div>

            </div>

            {/* RIGHT GLOBAL TRADE VISUAL */}
            <div className="export-hero-visual">

              <div className="export-visual-main">

                <div className="export-visual-top">
                  <span>INDIA</span>
                  <div></div>
                  <span>WORLD</span>
                </div>

                <div className="export-visual-globe">
                  <Globe2 />

                  <span className="export-globe-dot dot-one"></span>
                  <span className="export-globe-dot dot-two"></span>
                  <span className="export-globe-dot dot-three"></span>
                </div>

                <div className="export-visual-caption">
                  <span>CONNECTING MARKETS</span>

                  <h3>From India to the World.</h3>

                  <p>
                    Bringing quality products and global
                    opportunities together.
                  </p>
                </div>

                <div className="export-visual-bottom">
                  <span>QUALITY</span>
                  <span className="export-visual-bottom-line"></span>
                  <span>TRUST</span>
                  <span className="export-visual-bottom-line"></span>
                  <span>COMMITMENT</span>
                </div>

              </div>

              <div className="export-visual-floating">
                <div className="export-floating-icon">
                  <Ship />
                </div>

                <div>
                  <strong>Global Trade</strong>
                  <span>Built on Trust & Quality</span>
                </div>
              </div>

              <div className="export-visual-accent"></div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INTRODUCTION */}
      <section className="export-contact-intro">
        <div className="export-contact-container">

          <div className="export-intro-grid">

            <div>
              <span className="export-section-label">
                CONNECT WITH NEXTGEN
              </span>

              <h2>
                Every Great
                <br />
                <span>Trade Partnership</span>
                Begins With a Conversation.
              </h2>
            </div>

            <div className="export-intro-description">

              <p>
                At NEXTGEN GLOBAL IMPORTERS AND EXPORTERS,
                we believe international business is built on
                trust, quality and strong relationships.
              </p>

              <p>
                Whether you are an international buyer looking
                for reliable Indian products, a supplier seeking
                export opportunities, or a business partner
                interested in collaboration, we would love
                to hear from you.
              </p>

              <div className="export-intro-signature">
                <span></span>
                <strong>Your Gateway to Quality Indian Exports</strong>
              </div>

            </div>

          </div>

          {/* DIRECT CONTACT STRIP */}
          <div className="export-contact-strip">

            <a href="tel:+919511614528" className="export-strip-item">

              <div className="export-strip-icon">
                <Phone />
              </div>

              <div>
                <span>CALL OUR TEAM</span>
                <strong>+91-9511614528</strong>
              </div>

              <ArrowUpRight className="export-strip-arrow" />

            </a>

            <a
              href="mailto:asurve@nextgenglobalexim.com"
              className="export-strip-item"
            >

              <div className="export-strip-icon">
                <Mail />
              </div>

              <div>
                <span>EMAIL ENQUIRIES</span>
                <strong>asurve@nextgenglobalexim.com</strong>
              </div>

              <ArrowUpRight className="export-strip-arrow" />

            </a>

            <a
              href="https://wa.me/919511614528"
              target="_blank"
              rel="noreferrer"
              className="export-strip-item"
            >

              <div className="export-strip-icon export-whatsapp-icon">
                <MessageCircle />
              </div>

              <div>
                <span>WHATSAPP BUSINESS</span>
                <strong>+91-9511614528</strong>
              </div>

              <ArrowUpRight className="export-strip-arrow" />

            </a>

          </div>
        </div>
      </section>

      {/* EXPORT ENQUIRY FORM */}
      <section className="export-enquiry-section" id="export-enquiry">
        <div className="export-contact-container">

          <div className="export-enquiry-heading">

            <span className="export-section-label">
              LET'S DISCUSS BUSINESS
            </span>

            <h2>
              Tell Us About Your
              <span> Requirements.</span>
            </h2>

            <p>
              Share your requirements with us. Our team will
              be happy to assist you with product information,
              quotations and export-related enquiries.
            </p>

          </div>

          <div className="export-enquiry-layout">

            {/* LEFT: ENQUIRY FORM */}
            <div className="export-form-panel">

              <div className="export-form-top">

                <div>
                  <span>01 / ENQUIRY DETAILS</span>
                  <h3>Send Us Your Enquiry</h3>
                </div>

                <div className="export-form-icon">
                  <Send />
                </div>

              </div>

              <form onSubmit={handleSubmit} className="export-form">

                <div className="export-form-grid">

                  <div className="export-field">
                    <label htmlFor="export-name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="export-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="export-field">
                    <label htmlFor="export-company">
                      Company Name
                    </label>

                    <input
                      id="export-company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="export-field">
                    <label htmlFor="export-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="export-email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="export-field">
                    <label htmlFor="export-phone">
                      Phone / WhatsApp <span>*</span>
                    </label>

                    <input
                      id="export-phone"
                      name="phone"
                      type="tel"
                      placeholder="Country code + phone number"
                      required
                    />
                  </div>

                  <div className="export-field">
                    <label htmlFor="export-country">
                      Country
                    </label>

                    <input
                      id="export-country"
                      name="country"
                      type="text"
                      placeholder="Your country"
                    />
                  </div>

                  <div className="export-field">
                    <label htmlFor="export-product">
                      Product of Interest <span>*</span>
                    </label>

                    <select
                      id="export-product"
                      name="product"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a product
                      </option>

                      <option>Fruits & Vegetables</option>
                      <option>Spices & Herbal Powders</option>
                      <option>Dairy Products & Honey</option>
                      <option>Imitation Jewellery</option>
                      <option>Other Products</option>
                    </select>
                  </div>

                </div>

                <div className="export-field">
                  <label htmlFor="export-subject">
                    Enquiry Subject <span>*</span>
                  </label>

                  <select
                    id="export-subject"
                    name="subject"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>

                    <option>Product Enquiry</option>
                    <option>Request for Quotation</option>
                    <option>Bulk Export Order</option>
                    <option>International Partnership</option>
                    <option>Supplier Enquiry</option>
                    <option>Other Business Enquiry</option>
                  </select>
                </div>

                <div className="export-field">
                  <label htmlFor="export-message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="export-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your product requirements, quantity, destination country or business proposal..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="export-submit-btn">
                  Submit Enquiry
                  <ArrowRight size={19} />
                </button>

                <p className="export-form-disclaimer">
                  Your email application will open with the
                  details you provided.
                </p>

              </form>
            </div>

            {/* RIGHT: BUSINESS CONTACT PANEL */}
            <aside className="export-contact-aside">

              <div className="export-aside-top">

                <span>02 / DIRECT CONTACT</span>

                <h3>
                  We're Here to
                  <br />
                  Help You Grow.
                </h3>

                <p>
                  Speak directly with our team for product
                  details, pricing, export documentation
                  and business collaborations.
                </p>

              </div>

              <div className="export-aside-divider"></div>

              <div className="export-aside-contact">
                <Phone />

                <div>
                  <span>PHONE NUMBER</span>
                  <a href="tel:+919511614528">
                    +91-9511614528
                  </a>
                </div>
              </div>

              <div className="export-aside-contact">
                <Mail />

                <div>
                  <span>EMAIL ADDRESS</span>

                  <a href="mailto:asurve@nextgenglobalexim.com">
                    asurve@nextgenglobalexim.com
                  </a>

                  <a href="mailto:nextgenglobalexim@gmail.com">
                    nextgenglobalexim@gmail.com
                  </a>
                </div>
              </div>

              <div className="export-aside-contact">
                <Headphones />

                <div>
                  <span>BUSINESS SUPPORT</span>
                  <strong>Available Every Day</strong>
                </div>
              </div>

              <div className="export-aside-highlight">

                <div className="export-highlight-icon">
                  <PackageCheck />
                </div>

                <div>
                  <strong>Looking for Bulk Orders?</strong>

                  <p>
                    Connect with us for export pricing,
                    product availability and customised
                    business requirements.
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/919511614528"
                target="_blank"
                rel="noreferrer"
                className="export-aside-whatsapp"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowUpRight size={18} />
              </a>

            </aside>

          </div>
        </div>
      </section>

      {/* INTERNATIONAL BUSINESS HOURS */}
      <section className="export-global-hours">
        <div className="export-contact-container">

          <div className="export-hours-heading">

            <div>
              <span className="export-section-label">
                GLOBAL BUSINESS SUPPORT
              </span>

              <h2>
                Across Time Zones.
                <br />
                <span>Always Connected.</span>
              </h2>
            </div>

            <p>
              We welcome international enquiries and
              coordinate our communication across
              key global markets.
            </p>

          </div>

          <div className="export-hours-grid">

            <div className="export-hour-card">

              <div className="export-hour-top">
                <span className="export-hour-flag">🇮🇳</span>
                <span className="export-hour-zone">IST</span>
              </div>

              <h3>India</h3>
              <span className="export-hour-country">
                Indian Standard Time
              </span>

              <strong>09:00 AM – 09:00 PM</strong>

              <div className="export-hour-line"></div>

              <span className="export-hour-note">
                Daily Availability
              </span>

            </div>

            <div className="export-hour-card">

              <div className="export-hour-top">
                <span className="export-hour-flag">🇦🇪</span>
                <span className="export-hour-zone">GST</span>
              </div>

              <h3>United Arab Emirates</h3>
              <span className="export-hour-country">
                Gulf Standard Time
              </span>

              <strong>07:30 AM – 07:30 PM</strong>

              <div className="export-hour-line"></div>

              <span className="export-hour-note">
                Daily Availability
              </span>

            </div>

            <div className="export-hour-card">

              <div className="export-hour-top">
                <span className="export-hour-flag">🇬🇧</span>
                <span className="export-hour-zone">GMT</span>
              </div>

              <h3>United Kingdom</h3>
              <span className="export-hour-country">
                Greenwich Mean Time
              </span>

              <strong>03:30 AM – 03:30 PM</strong>

              <div className="export-hour-line"></div>

              <span className="export-hour-note">
                Daily Availability
              </span>

            </div>

            <div className="export-hour-card">

              <div className="export-hour-top">
                <span className="export-hour-flag">🇺🇸</span>
                <span className="export-hour-zone">EST</span>
              </div>

              <h3>United States</h3>
              <span className="export-hour-country">
                Eastern Standard Time
              </span>

              <strong>12:30 AM – 12:30 PM</strong>

              <div className="export-hour-line"></div>

              <span className="export-hour-note">
                Daily Availability
              </span>

            </div>

          </div>

          <div className="export-hours-footnote">
            <Clock3 size={16} />

            <span>
              Timings are listed in the respective standard
              time zones. Local daylight-saving adjustments
              may apply.
            </span>
          </div>

        </div>
      </section>

      
    </main>
  );
};

export default ContactSection;
