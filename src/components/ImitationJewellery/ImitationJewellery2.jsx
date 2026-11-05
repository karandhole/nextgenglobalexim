
import React from "react";
import "./ImitationJewellery2.css";

const jewelleryCategories = [
  {
    number: "01",
    title: "Necklace Sets",
    subtitle: "Graceful Designs for Every Occasion",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-1.png",
    description:
      "Our necklace sets blend contemporary trends with traditional artistry, offering stunning pieces for weddings, festivals and everyday elegance. From Kundan and Polki to CZ and antique gold finishes—each design is crafted to enhance every neckline with timeless beauty.",
  },
  {
    number: "02",
    title: "Earrings",
    subtitle: "Small Details, Big Impact",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design.png",
    description:
      "Discover an elegant range of jhumkas, chandbalis, studs, hoops and danglers crafted with precision. Lightweight, skin-friendly, and beautifully plated—our earrings make the perfect accessory for effortless daily wear or statement festive looks.",
  },
  {
    number: "03",
    title: "Finger Rings",
    subtitle: "Elegance That Sits Perfectly",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-2.png",
    description:
      "Our imitation rings come in premium CZ stones, antique textures, and adjustable fits. Ideal for gifting or daily fashion, these rings offer the sparkle of real jewellery at an affordable value—without compromising on quality or shine.",
  },
  {
    number: "04",
    title: "Bangles & Bracelets",
    subtitle: "Tradition Meets Contemporary Style",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-3.png",
    description:
      "Choose from classic kada styles, crafted bangles, and modern bracelets. Each piece is finished with long-lasting plating and smooth edges, ensuring comfort and beauty in every wear. Perfect for bridal sets, festive collections and retail stores.",
  },
  {
    number: "05",
    title: "Bridal Jewellery",
    subtitle: "Designed for the Grandest Moments",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-4.png",
    description:
      "Our bridal collection is inspired by India's rich cultural heritage. Heavy Kundan, temple-style ornaments, antique gold sets, and layered necklaces—each piece makes a bride look radiant and unforgettable on her special day.",
  },
  {
    number: "06",
    title: "American Diamond (CZ) Jewellery",
    subtitle: "Sparkle Like Real Diamonds",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-5.png",
    description:
      "Our CZ jewellery is crafted with precision-cut stones that mimic real diamond brilliance. Perfect for evening wear, formal events and party ensembles—each piece adds an instant touch of glamour and sophistication.",
  },
  {
    number: "07",
    title: "Oxidised Jewellery",
    subtitle: "Boho, Artistic & Beautifully Unique",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-6.png",
    description:
      "Tribal-inspired and stylish, our oxidised pieces are perfect for Indo-western and bohemian looks. Lightweight and versatile, these designs are highly popular in global fashion markets.",
  },
  {
    number: "08",
    title: "Everyday Minimal Jewellery",
    subtitle: "Simple, Stylish & Effortlessly Elegant",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-7.png",
    description:
      "Designed for daily use, this range includes petite pendants, tiny studs and delicate bracelets. Made with hypoallergenic coatings, giving long-lasting comfort and beauty every day.",
  },
  {
    number: "09",
    title: "Kids’ Jewellery",
    subtitle: "Safe, Colourful & Cute",
    image: "https://nextgenglobalexim.com/wp-content/uploads/2026/01/Untitled-design-8.png",
    description:
      "Our imitation kids’ jewellery is bright, colourful and designed with child-friendly materials. Perfect for birthdays, return gifts and festive outfits.",
  },
];

const ImitationJewellery2 = () => {
  return (
    <section className="ij-categories">
      <div className="ij-category-heading">
        <span className="ij-label">EXPLORE OUR COLLECTION</span>
        <h2>Discover Our Jewellery Categories</h2>
        <p>
          From traditional statement pieces to everyday essentials,
          explore jewellery designed for every style and occasion.
        </p>
      </div>

      <div className="ij-category-grid">
        {jewelleryCategories.map((item) => (
          <article className="ij-category-card" key={item.number}>
            <div className="ij-category-image">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <span className="ij-category-number">{item.number}</span>
            </div>

            <div className="ij-category-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ImitationJewellery2;
