import React from 'react'
import MainSlider from '../components/Slider/MainSlider';
import AboutSection from '../components/AboutSection/AboutSection';
import OurApproach from '../components/OurApproach/OurApproach';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import FruitVegetableSlider from '../components/ProductsSection/FruitVegetableSlider';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import Testimonials from '../components/Testimonials/Testimonials';


const Home = () => {
  
  return (
   <main>
      <MainSlider />
      <AboutSection/>
      <OurApproach/>
      <ProductsSection/>
      <FruitVegetableSlider/>
      <WhyChooseUs/>
      <StatsCounter/>
      <Testimonials/>
      {/* Add your remaining Home page sections below */}
    </main>
  );
};




export default Home;
