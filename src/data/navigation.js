export const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Products",
    path: "#",
    children: [
      {
        name: "Fruits & Vegetables",
        path: "/products/fruits-vegetables",
      },
      {
        name: "Spices & Herbal Powders",
        path: "/products/spices-herbal-powders",
      },
      {
        name: "Dairy Products & Honey",
        path: "/products/dairy-products-honey",
      },
      {
        name: "Imitation Jewellery",
        path: "/products/imitation-jewellery",
      },
    ],
  },
  {
    name: "Export Certificates",
    path: "/certificates",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];