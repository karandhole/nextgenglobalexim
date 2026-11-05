import React from "react";
import {
    Leaf,
    FlaskConical,
    Globe2,
    ShieldCheck,
    Package,
    Sparkles,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

import "./SpicesHerbalPowders1.css";

const productGroups = [
    {
        id: 1,
        number: "01",
        eyebrow: "DEHYDRATED VEGETABLE POWDERS",
        title: "Onion & Garlic Powders",
        description:
            "We supply premium-quality Onion and Garlic Powders sourced from trusted Indian farms, carefully processed under international hygiene standards and delivered to global markets.",
        images: [
            {
                image: "/images/products/p2-1.jpg",
                name: "Onion Powder",
            },
            {
                image: "/images/products/p2-2.jpg",
                name: "Garlic Powder",
            },
        ],
        features: [
            "100% Natural & Pure",
            "Strong Aroma & Uniform Texture",
            "Export-Grade Quality",
            "Hygienically Processed",
            "Ideal for Seasonings & Masalas",
            "Custom Packaging Available",
        ],
    },
    {
        id: 2,
        number: "02",
        eyebrow: "NATURAL HERBAL POWDERS",
        title: "Ginger & Amla Powders",
        description:
            "We export premium-quality Ginger and Amla Powders crafted from carefully selected Indian produce, offering natural ingredients, distinctive aroma and consistent quality for global buyers.",
        images: [
            {
                image: "/images/products/p2-3.jpg",
                name: "Ginger Powder",
            },
            {
                image: "/images/products/p2-4.jpg",
                name: "Amla Powder",
            },
        ],
        features: [
            "Pure, Natural & Nutrient-Rich",
            "Distinctive Aroma & Flavor",
            "Export-Grade Quality",
            "Carefully Processed",
            "Ideal for Food & Herbal Products",
            "Custom Packaging Available",
        ],
    },
    {
        id: 3,
        number: "03",
        eyebrow: "PREMIUM INDIAN SPICES",
        title: "Turmeric & Spice Powders",
        description:
            "Exporters of premium Indian spices, raw turmeric and turmeric powder. Carefully processed products with quality-focused sourcing for global food and wellness industries.",
        images: [
            {
                image: "/images/products/p2-5.jpg",
                name: "Assorted Spice Powders",
            },
            {
                image: "/images/products/p2-6.jpg",
                name: "Turmeric Powder",
            },
        ],
        features: [
            "Fine Powder Quality",
            "High-Curcumin Turmeric Selection",
            "Export-Grade Quality",
            "Natural & Carefully Processed",
            "Suitable for Food Applications",
            "Bulk & Custom Packaging",
        ],
    },
    {
        id: 4,
        number: "04",
        eyebrow: "DEHYDRATED PRODUCTS & KONKAN SPECIALTIES",
        title: "Dehydrated Vegetables & Kokum",
        description:
            "We export premium dehydrated vegetables and fruits, along with authentic Kokum (Garcinia indica) sourced from the Konkan region, known for its distinctive natural character.",
        images: [
            {
                image: "/images/products/p2-7.jpg",
                name: "Dehydrated Vegetables",
            },
            {
                image: "/images/products/p2-8.jpg",
                name: "Konkan Kokum",
            },
        ],
        features: [
            "Pure & Carefully Selected",
            "Authentic Konkan Origin",
            "Convenient Long Shelf Life",
            "Natural Product Selection",
            "No Preservatives Added",
            "Bulk & Custom Packaging",
        ],
    },
];

const qualityPoints = [
    {
        icon: <Leaf />,
        title: "Natural Products",
        description: "Carefully selected natural ingredients",
    },
    {
        icon: <ShieldCheck />,
        title: "Quality Focused",
        description: "Hygiene-conscious processing standards",
    },
    {
        icon: <Globe2 />,
        title: "Global Exports",
        description: "Serving international market requirements",
    },
    {
        icon: <Package />,
        title: "Custom Packaging",
        description: "Flexible packaging for bulk requirements",
    },
];

const SpicesHerbalPowders1 = () => {
    return (
        <main className="shp-page">

            {/* HERO SECTION */}
            <section className="shp-hero">
                <div className="shp-hero-pattern"></div>

                <div className="shp-container shp-hero-content">
                    <span className="shp-hero-label">
                        <Leaf size={15} />
                        NATURAL INGREDIENTS FROM INDIA
                    </span>

                    <h1>
                        Spices & <span>Herbal Powders</span>
                    </h1>

                    <p>
                        Discover our premium range of natural dehydrated powders,
                        Indian spices and herbal ingredients, carefully sourced
                        and processed for international markets.
                    </p>

                    <a href="/contact" className="shp-hero-btn">
                        Explore Export Opportunities
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="shp-hero-bottom">
                    <span>PURE INGREDIENTS</span>
                    <span>INDIAN ORIGIN</span>
                    <span>GLOBAL QUALITY</span>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="shp-intro">
                <div className="shp-container">
                    <div className="shp-intro-grid">
                        <div className="shp-intro-heading">
                            <span className="shp-section-label">
                                OUR PRODUCT RANGE
                            </span>

                            <h2>
                                Nature's Goodness,
                                <span> Carefully Processed.</span>
                            </h2>
                        </div>

                        <div className="shp-intro-description">
                            <p>
                                From aromatic vegetable powders to traditional Indian
                                spices and herbal ingredients, we bring carefully
                                selected products to international markets.
                            </p>
                            <p>
                                Our focus is on product quality, hygienic handling,
                                reliable sourcing and packaging solutions that meet
                                the needs of global buyers.
                            </p>
                        </div>
                    </div>

                    <div className="shp-quality-grid">
                        {qualityPoints.map((item, index) => (
                            <div className="shp-quality-item" key={index}>
                                <div className="shp-quality-icon">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCT GROUPS */}
            <section className="shp-products">
                <div className="shp-container">

                    <div className="shp-products-heading">
                        <span className="shp-section-label">
                            EXPLORE OUR SELECTION
                        </span>
                        <h2>
                            Our <span>Products</span>
                        </h2>
                        <p>
                            Premium Indian ingredients, selected with care
                            for quality-conscious global markets.
                        </p>
                    </div>

                    <div className="shp-product-list">
                        {productGroups.map((group, index) => (
                            <article
                                className={`shp-product-group ${index % 2 !== 0 ? "shp-reverse" : ""
                                    }`}
                                key={group.id}
                            >
                                {/* PRODUCT IMAGES */}
                                <div className="shp-product-visual">
                                    <span className="shp-product-number">
                                        {group.number}
                                    </span>

                                    <div className="shp-image-grid">
                                        {group.images.map((image, imageIndex) => (
                                            <div
                                                className="shp-image-card"
                                                key={imageIndex}
                                            >
                                                <img
                                                    src={image.image}
                                                    alt={image.name}
                                                    loading="lazy"
                                                />
                                                <span>{image.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <span className="shp-visual-caption">
                                        NEXTGEN GLOBAL EXIM
                                    </span>
                                </div>

                                {/* PRODUCT INFORMATION */}
                                <div className="shp-product-info">
                                    <span className="shp-product-eyebrow">
                                        {group.eyebrow}
                                    </span>

                                    <h3>{group.title}</h3>

                                    <p className="shp-product-description">
                                        {group.description}
                                    </p>

                                    <div className="shp-feature-heading">
                                        <Sparkles size={17} />
                                        <span>PRODUCT HIGHLIGHTS</span>
                                    </div>

                                    <div className="shp-feature-list">
                                        {group.features.map((feature, featureIndex) => (
                                            <div
                                                className="shp-feature"
                                                key={featureIndex}
                                            >
                                                <CheckCircle2 size={16} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="/contact" className="shp-enquire-btn">
                                        Enquire About This Product
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESSING STANDARDS */}
            <section className="shp-standards">
                <div className="shp-container shp-standards-content">
                    <div>
                        <span className="shp-section-label">
                            OUR COMMITMENT
                        </span>
                        <h2>
                            Quality in Every
                            <span> Ingredient.</span>
                        </h2>
                        <p>
                            We focus on careful sourcing, hygienic handling,
                            product consistency and dependable export solutions.
                            Every order is handled with attention to the
                            requirements of our international customers.
                        </p>
                    </div>

                    <div className="shp-standards-points">
                        <div>
                            <Leaf />
                            <span>Careful Product Selection</span>
                        </div>
                        <div>
                            <FlaskConical />
                            <span>Quality-Focused Processing</span>
                        </div>
                        <div>
                            <ShieldCheck />
                            <span>Hygienic Handling</span>
                        </div>
                        <div>
                            <Package />
                            <span>Flexible Export Packaging</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}


        </main>
    );
};

export default SpicesHerbalPowders1;