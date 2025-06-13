import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import MainSection from './components/MainSection';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import FastDelivery from './components/FastDelivery';
import Guarantee from './components/Guarantee';
import SocialOrder from './components/SocialOrder';
import OurServices from "./components/OurServices"
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 container m-auto">
      <Header />
      <Carousel />
      <MainSection />
      <WhyUs />
      <AboutUs />
      {/* <Services /> */}
      <OurServices />
      <Blog />
      <FastDelivery />
      <Guarantee />
      <SocialOrder />
      <Footer />
    </div>
  );
};

export default App;
