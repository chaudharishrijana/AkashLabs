import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Slider />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;