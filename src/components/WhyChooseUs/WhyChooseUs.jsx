import {
  BadgeCheck,
  Globe2,
  ClipboardCheck,
} from "lucide-react";

import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Certified Suppliers",
    description:
      "Trusted suppliers delivering consistent quality, on-time shipments, and export-ready products backed by stringent quality checks and long-standing reliability.",
  },
  {
    id: 2,
    icon: Globe2,
    title: "Worldwide Export Services",
    description:
      "We offer seamless international shipping with reliable logistics partners, ensuring your products reach global destinations safely and on time.",
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Export Quality Validation",
    description:
      "Every product undergoes strict quality assurance and export-grade inspection to ensure it meets international standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        <div className="why-choose-heading">
          <span className="why-choose-tag">
            WHY CHOOSE NEXTGEN
          </span>

          <h2>
            Excellence in Every <span>Export</span>
          </h2>

          <p>
            Your trusted partner for quality products, reliable
            logistics, and international export standards.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="why-choose-card" key={feature.id}>
                <div className="why-icon">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="why-card-line"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;