import {
    MapPin,
    Phone,
    Mail,
    Globe2,
    ArrowUpRight,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="main-footer">

            {/* Decorative background */}
            <div className="footer-glow"></div>

            <div className="footer-container">

                {/* Main footer content */}
                <div className="footer-main-grid">

                    {/* Company information */}
                    <div className="footer-company">

                        <Link to="/" className="footer-logo">
                            <img
                                src="/images/logo.jpg"
                                alt="NextGen Global Exim"
                            />
                        </Link>

                        <p className="footer-description">
                            NEXTGEN Global Importers and Exporters is committed
                            to delivering quality Indian products to global
                            markets through trusted partnerships, ethical
                            sourcing and reliable international logistics.
                        </p>

                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook">f</a>
                            <a href="#" aria-label="Instagram">◎</a>
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="YouTube">▶</a>
                        </div>

                    </div>

                    {/* Quick links */}
                    <div className="footer-links-column">

                        <h3>Quick Links</h3>
                        <span className="footer-heading-line"></span>

                        <ul>
                            
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/certificates">Export Certificates</Link></li>
                            <li><Link to="/gallery">Our Gallery</Link></li>
                            <li><Link to="/blog">Latest Blogs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>

                    </div>

                    {/* Products */}
                    <div className="footer-links-column">

                        <h3>Our Products</h3>
                        <span className="footer-heading-line"></span>

                        <ul>
                            <li>
                                <Link to="/products/fruits-vegetables">
                                    Fruits & Vegetables
                                </Link>
                            </li>

                            <li>
                                <Link to="/products/spices-herbal-powders">
                                    Spices & Herbal Powders
                                </Link>
                            </li>

                            <li>
                                <Link to="/products/dairy-products-honey">
                                    Dairy Products & Honey
                                </Link>
                            </li>

                            <li>
                                <Link to="/products/imitation-jewellery">
                                    Imitation Jewellery
                                </Link>
                            </li>
                        </ul>

                    </div>

                    {/* Contact information */}
                    <div className="footer-contact">

                        <h3>Get In Touch</h3>
                        <span className="footer-heading-line"></span>

                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <MapPin size={19} />
                            </div>

                            <p>
                                India
                                <span>Serving Global Markets</span>
                            </p>
                        </div>

                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <Phone size={19} />
                            </div>

                            <a href="tel:+910000000000">
                                Contact Our Team
                                <span>Get in touch by phone</span>
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <Mail size={19} />
                            </div>

                            <a href="mailto:info@nextgenglobalexim.com">
                                Email Us
                                <span>info@nextgenglobalexim.com</span>
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <Globe2 size={19} />
                            </div>

                            <a
                                href="https://nextgenglobalexim.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Our Website
                                <span>Global Export Solutions</span>
                            </a>
                        </div>

                    </div>

                </div>

                {/* Export call to action */}
                <div className="footer-cta">

                    <div>
                        <span className="footer-cta-label">
                            LET'S CONNECT GLOBALLY
                        </span>

                        <h2>
                            Looking for a Reliable
                            <span> Export Partner?</span>
                        </h2>

                        <p>
                            Let's build a successful international business
                            partnership together.
                        </p>
                    </div>

                    <Link to="/contact" className="footer-cta-button">
                        Get In Touch
                        <ArrowUpRight size={19} />
                    </Link>

                </div>

                {/* Bottom footer */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} NEXTGEN Global Importers
                        and Exporters. All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span></span>
                        <Link to="/terms-and-conditions">
                            Terms & Conditions
                        </Link>
                    </div>

                    <a href="#top" className="footer-back-top">
                        Back to Top
                        <ArrowRight size={16} />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;