import { ArrowUpRight, Clock3, Leaf, Sparkles } from "lucide-react";
import "./Blog.css";

const blogPosts = [
  {
    number: "01",
    category: "FRUITS & VEGETABLES",
    title: "Ratnagiri Alphonso Mango – King of Mangoes.",
     image: "/images/blog/blog1.jpg",
    imageAlt: "Fresh Ratnagiri Alphonso mangoes",
    content: (
      <>
        <p>
          Ratnagiri Alphonso Mango, popularly known as <strong>Hapus</strong>,
          is globally admired for its rich aroma, smooth texture, and naturally
          sweet taste. Grown in the coastal region of{" "}
          <strong>Ratnagiri, Maharashtra</strong>, these mangoes benefit from
          laterite soil, sea breeze, and tropical climate, giving them unmatched
          quality and flavor.
        </p>

        <p>
          Alphonso mangoes are free from artificial ripening methods and are
          carefully harvested to ensure premium freshness. Rich in{" "}
          <strong>vitamins A, C, antioxidants, and dietary fiber</strong>, they
          support immunity, eye health, and digestion.
        </p>
      </>
    ),
    link: "/contact",
    buttonText: "Enquire About Mangoes",
  },
  {
    number: "02",
    category: "MANGO PRODUCTS",
    title: "Mango Products – Pure Taste, Extended Shelf Life",
      image: "/images/blog/blog2.jpg",
    imageAlt: "Premium mango pulp and processed mango products",
    content: (
      <>
        <p>
          Ratnagiri Alphonso Mango, popularly known as <strong>Hapus</strong>,
          is globally admired for its rich aroma, smooth texture, and naturally
          sweet taste. Grown in the coastal region of{" "}
          <strong>Ratnagiri, Maharashtra</strong>, these mangoes benefit from
          laterite soil, sea breeze, and tropical climate, giving them unmatched
          quality and flavor.
        </p>

        <p>
          Alphonso mangoes are free from artificial ripening methods and are
          carefully harvested to ensure premium freshness. Rich in{" "}
          <strong>vitamins A, C, antioxidants, and dietary fiber</strong>, they
          support immunity, eye health, and digestion.
        </p>
      </>
    ),
    link: "/contact",
    buttonText: "Enquire About Mango Products",
  },
];

const highlights = [
  "GI-tagged origin",
  "Naturally ripened",
  "Premium export quality",
  "Authentic taste & aroma",
];

const BlogSection = () => {
  return (
    <main className="blog-page">
      {/* PAGE HERO */}
      <section className="blog-banner">
        <div className="blog-banner-content">
          <span className="blog-eyebrow">
            <span></span> INSIGHTS FROM NEXTGEN
          </span>

          <h1>
            Discover More.
            <br />
            <span>Explore Quality.</span>
          </h1>

          <p>
            Explore the taste, quality and story behind India's finest products
            and global export opportunities.
          </p>

          <a href="#blog-stories" className="blog-banner-btn">
            Explore Our Stories <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="blog-banner-decoration">
          <div className="banner-circle banner-circle-one"></div>
          <div className="banner-circle banner-circle-two"></div>
          <div className="banner-decoration-text">
            <Leaf size={25} />
            <span>QUALITY FROM INDIA</span>
          </div>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="blog-list-section" id="blog-stories">
        <div className="blog-section-heading">
          <div>
            <span className="blog-section-label">
              <Sparkles size={15} /> OUR LATEST STORIES
            </span>

            <h2>
              Stories Worth <span>Discovering.</span>
            </h2>

            <p>
              Discover our products, their origins and the quality that connects
              us to global markets.
            </p>
          </div>

          <span className="blog-count">01 — 02</span>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.number}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.imageAlt} />

                <span className="blog-card-number">{post.number}</span>

                <span className="blog-card-category">{post.category}</span>
              </div>

              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>
                    <Clock3 size={15} /> 4 MIN READ
                  </span>
                  <span className="blog-meta-dot"></span>
                  <span>NEXTGEN GLOBAL EXIM</span>
                </div>

                <h3>{post.title}</h3>

                <div className="blog-card-description">
                  {post.content}
                </div>

                <div className="blog-highlights">
                  <h4>Why Ratnagiri Alphonso?</h4>

                  <div className="blog-highlight-grid">
                    {highlights.map((item) => (
                      <div className="blog-highlight" key={item}>
                        <span>✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <a href={post.link} className="blog-card-btn">
                  {post.buttonText}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-coming-soon">
          <span></span>
          More product stories and export insights coming soon.
          <span></span>
        </div>
      </section>

     
    </main>
  );
};

export default BlogSection;