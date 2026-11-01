
import {
  Target,
  Eye,
  Globe2,
  ArrowUpRight,
  ShieldCheck,
  Network,
  Sparkles,
} from "lucide-react";

import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mvv-section">
      <div className="mvv-container">

        {/* SECTION HEADING */}
        {/* <div className="mvv-heading">
          <span className="mvv-eyebrow">
            <span></span>
            THE FOUNDATION OF NEXTGEN
            <span></span>
          </span>

          <h2>
            Driven by Purpose.
            <br />
            <span>Defined by Excellence.</span>
          </h2>

          <p>
            Our mission, vision and values guide every decision,
            every partnership and every global connection.
          </p>
        </div> */}

        {/* THREE CARDS */}
        <div className="mvv-grid">

          {/* MISSION */}
          <article className="mvv-modern-card mission-card">

            <div className="mvv-card-top">
              <span className="mvv-number">01 / 03</span>
              <span className="mvv-card-tag">OUR PURPOSE</span>
            </div>

            <div className="mvv-icon-scene mission-scene">
              <div className="mvv-orbit orbit-one"></div>
              <div className="mvv-orbit orbit-two"></div>
              <div className="mvv-orbit orbit-three"></div>

              <div className="mvv-main-icon">
                <Target size={55} strokeWidth={1.4} />
              </div>

              <span className="mvv-scene-dot scene-dot-one"></span>
              <span className="mvv-scene-dot scene-dot-two"></span>
              <span className="mvv-scene-dot scene-dot-three"></span>
            </div>

            <div className="mvv-card-text">
              <span className="mvv-small-title">WHAT WE DO</span>

              <h3>Our Mission</h3>

              <p>
                To provide premium-quality products with unmatched service,
                building long-lasting partnerships across the world.
              </p>
            </div>

            <div className="mvv-card-footer">
              <span>QUALITY. SERVICE. PARTNERSHIPS.</span>
              <ArrowUpRight size={20} />
            </div>

            <div className="mvv-card-glow"></div>
          </article>

          {/* VISION */}
          <article className="mvv-modern-card vision-card">

            <div className="mvv-card-top">
              <span className="mvv-number">02 / 03</span>
              <span className="mvv-card-tag">OUR AMBITION</span>
            </div>

            <div className="mvv-icon-scene vision-scene">
              <div className="mvv-vision-ring vision-ring-one"></div>
              <div className="mvv-vision-ring vision-ring-two"></div>

              <div className="mvv-main-icon">
                <Eye size={58} strokeWidth={1.35} />
              </div>

              <div className="mvv-vision-globe">
                <Globe2 size={25} />
              </div>

              <span className="mvv-vision-star star-one">✦</span>
              <span className="mvv-vision-star star-two">✦</span>
            </div>

            <div className="mvv-card-text">
              <span className="mvv-small-title">WHERE WE ARE GOING</span>

              <h3>Our Vision</h3>

              <p>
                To be recognized as a leading global exporter, known for
                authenticity, reliability, and customer-first approach.
              </p>
            </div>

            <div className="mvv-card-footer">
              <span>AUTHENTICITY. TRUST. GROWTH.</span>
              <ArrowUpRight size={20} />
            </div>

            <div className="mvv-card-glow"></div>
          </article>

          {/* CORE VALUES */}
          <article className="mvv-modern-card values-card">

            <div className="mvv-card-top">
              <span className="mvv-number">03 / 03</span>
              <span className="mvv-card-tag">OUR BELIEFS</span>
            </div>

            <div className="mvv-icon-scene values-scene">
              <div className="mvv-network-circle network-one"></div>
              <div className="mvv-network-circle network-two"></div>

              <div className="mvv-network-line network-line-one"></div>
              <div className="mvv-network-line network-line-two"></div>
              <div className="mvv-network-line network-line-three"></div>

              <div className="mvv-main-icon">
                <Network size={55} strokeWidth={1.4} />
              </div>

              <div className="mvv-network-node node-one">
                <Globe2 size={19} />
              </div>

              <div className="mvv-network-node node-two">
                <ShieldCheck size={19} />
              </div>

              <div className="mvv-network-node node-three">
                <Sparkles size={19} />
              </div>
            </div>

            <div className="mvv-card-text">
              <span className="mvv-small-title">WHAT WE STAND FOR</span>

              <h3>Core Values</h3>

              <h4>Global Perspective</h4>

              <p>
                Understanding the diverse cultural nuances of international
                markets while respecting local customs and practices.
              </p>
            </div>

            <div className="mvv-card-footer">
              <span>RESPECT. CULTURE. CONNECTION.</span>
              <ArrowUpRight size={20} />
            </div>

            <div className="mvv-card-glow"></div>
          </article>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mvv-bottom-line">
          <div className="mvv-bottom-icon">
            <Globe2 size={22} />
          </div>

          <p>
            One Vision. One Commitment. <strong>Connecting India to the World.</strong>
          </p>

          <div className="mvv-bottom-decoration"></div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
