
import React from "react";
import "./Certificates.css";
import { ShieldCheck, Award, Globe2, ArrowUpRight } from "lucide-react";

const certificates = [
    {
        id: 1,
        title: "Import Export Code (IEC)",
        subtitle: "Government of India Registration",
        image: "/images/gallery/IEC_code_date_modified.png",
        number: "CERTIFICATE 01",
    },
    {
        id: 2,
        title: "APEDA Registration",
        subtitle: "Agricultural & Processed Food Products",
        images: [
            "/images/gallery/apeda_rcmc1-1.jpg",
            "/images/gallery/apeda_rcmc_2.png",
        ],
        number: "CERTIFICATE 02",
    },
    {
        id: 3,
        title: "FSSAI License",
        subtitle: "Food Safety & Quality Compliance",
        image: "/images/gallery/fssai_license_image.png",
        number: "CERTIFICATE 03",
    },
    {
        id: 4,
        title: "Additional Trade Certification",
        subtitle: "Export Standards & Compliance",
        image: "/images/gallery/fssai_license_image_page3.png",
        number: "CERTIFICATE 04",
    },
];

const CertificatesSection = () => {
    return (
        <section className="certificates-section">

            {/* Hero Section */}
            <div className="certificates-hero">
                <div className="certificates-hero-content">

                    <span className="certificates-tag">
                        <ShieldCheck size={16} />
                        TRUST • QUALITY • COMPLIANCE
                    </span>

                    <h1>
                        Our <span>Certificates</span>
                        <br />
                        & Global Compliance
                    </h1>

                    <p>
                        As a registered and globally compliant exporter,
                        our Export–Import Certificates validate our
                        authenticity, trade permissions, and product
                        quality standards. This section features all
                        the licenses that support smooth and secure
                        cross-border shipments.
                    </p>

                    <div className="certificates-hero-stats">
                        <div>
                            <Award size={22} />
                            <span>Verified Credentials</span>
                        </div>

                        <div>
                            <Globe2 size={22} />
                            <span>Global Trade Standards</span>
                        </div>
                    </div>

                </div>

                <div className="certificates-hero-decoration">
                    <div className="hero-circle hero-circle-one"></div>
                    <div className="hero-circle hero-circle-two"></div>
                    <ShieldCheck size={115} strokeWidth={0.8} />
                </div>
            </div>

            {/* Certificates */}
            <div className="certificates-container">

                <div className="certificates-heading">
                    <span>OUR DOCUMENTATION</span>
                    <h2>Credentials That Build Trust</h2>
                    <p>
                        Official registrations and certifications
                        reflecting our commitment to transparency,
                        quality, and international trade compliance.
                    </p>
                </div>


                <div className="certificates-grid">

                    {certificates.map((certificate) => (
                        <div className="certificate-card" key={certificate.id}>

                            <div className="certificate-card-top">
                                <div>
                                    <span>{certificate.number}</span>
                                    <h3>{certificate.title}</h3>
                                    <p>{certificate.subtitle}</p>
                                </div>

                                <ShieldCheck size={25} />
                            </div>

                            <div className="certificate-image-wrapper">
                                {certificate.images ? (
                                    <div className="certificate-images-stack">
                                        {certificate.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${certificate.title} - Part ${index + 1}`}
                                                loading="lazy"
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            <div className="certificate-card-footer">
                                <span>
                                    <ShieldCheck size={15} />
                                    Official Documentation
                                </span>

                                <a
                                    href={certificate.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate-view"
                                >
                                    View Certificate
                                    <ArrowUpRight size={17} />
                                </a>
                            </div>

                        </div>
                    ))}

                </div>


                {/* Bottom Trust Section */}
                <div className="certificates-trust">
                    <div className="trust-icon">
                        <Globe2 size={30} />
                    </div>

                    <div>
                        <h3>Committed to Global Trade Excellence</h3>
                        <p>
                            Every certification represents our dedication
                            to reliable documentation, responsible trading,
                            and international business standards.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default CertificatesSection;
