import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FruitsVegetables from "./pages/FruitsVegetables";
import SpicesHerbalPowders from "./pages/SpicesHerbalPowders";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products/fruits-vegetables" element={<FruitsVegetables />} />
         <Route path="/products/spices-herbal-powders" element={<SpicesHerbalPowders />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;