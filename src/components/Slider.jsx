import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence to automate processes and gain valuable insights from your data.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "linear-gradient(135deg, #3b82f6, #1e40af)"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business needs and ensure optimal performance.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    {
      title: "Digital Transformation",
      description: "Transform your business processes with modern technology and innovative digital strategies.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''} ${
            index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
          }`}
        >
          <div className="slide-image">
            <img src={slide.image} alt={slide.title} />
            <div 
              className="slide-overlay" 
              style={{ background: slide.gradient }}
            ></div>
            
            <div className="slide-content">
              <div className="container">
                <h2 className="slide-title fade-in-up">
                  {slide.title}
                </h2>
                <p className="slide-description fade-in-up">
                  {slide.description}
                </p>
                <button className="btn btn-secondary slide-btn fade-in-up">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="slider-nav slider-nav-prev" aria-label="Previous Slide">
        <ChevronLeft />
      </button>
      
      <button onClick={nextSlide} className="slider-nav slider-nav-next" aria-label="Next Slide">
        <ChevronRight />
      </button>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
