import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleScrollDown = () => {
    
    const nextSection = document.querySelector('#about'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovating the Future with
            <span className="hero-gradient"> Technology</span>
          </h1>

          <p className="hero-subtitle">
            We create cutting-edge solutions that transform businesses and empower innovation through advanced technology and expertise.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn">
              Get Started
              <ArrowDown className="btn-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse" onClick={handleScrollDown}>
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
