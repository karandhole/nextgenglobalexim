import { useEffect, useRef, useState } from "react";
import {
  UsersRound,
  Ship,
  Award,
  Globe2,
} from "lucide-react";

import "./StatsCounter.css";

const stats = [
  {
    id: 1,
    number: 11,
    suffix: "K+",
    label: "Happy Clients",
    detail: "Across Global Markets",
    icon: UsersRound,
  },
  {
    id: 2,
    number: 1800,
    suffix: "T+",
    label: "Successful Shipments",
    detail: "Delivering Worldwide",
    icon: Ship,
  },
  {
    id: 3,
    number: 10,
    suffix: "+",
    label: "Years of Excellence",
    detail: "Built on Trust & Quality",
    icon: Award,
  },
  {
    id: 4,
    number: 12,
    suffix: "+",
    label: "Product Categories",
    detail: "Diverse Export Portfolio",
    icon: Globe2,
  },
];

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2200;
    const startTime = performance.now();
    let frame;

    const animate = (time) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts(
        stats.map((item) =>
          Math.floor(item.number * ease)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section className="export-stats" ref={sectionRef}>
      <div className="export-stats-overlay"></div>

      <div className="export-stats-container">

        {/* Section Heading */}

        <div className="export-stats-heading">
          <span className="export-stats-label">
            <span className="heading-line"></span>
            OUR GLOBAL IMPACT
            <span className="heading-line"></span>
          </span>

          <h2>
            Connecting Businesses.
            <span> Creating Global Success.</span>
          </h2>

         
        </div>

        {/* Statistics */}

        <div className="export-stats-grid">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="export-stat-item" key={item.id}>

                <div className="export-stat-icon">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <div className="export-stat-number">
                  {counts[index].toLocaleString("en-IN")}
                  <span>{item.suffix}</span>
                </div>

                <h3>{item.label}</h3>

                <p>{item.detail}</p>

                <div className="export-stat-accent"></div>

              </div>
            );
          })}

        </div>

        {/* Bottom Message */}

        <div className="export-stats-footer">
          <span className="footer-dot"></span>
          <p>
            YOUR TRUSTED PARTNER IN GLOBAL IMPORTS & EXPORTS
          </p>
          <span className="footer-dot"></span>
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;