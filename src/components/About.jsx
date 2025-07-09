import React from 'react';
import { Target, Zap, Shield, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision & Focus",
      description: "We deliver targeted solutions that address your specific business challenges with precision and expertise."
    },
    {
      icon: Zap,
      title: "Innovation Speed",
      description: "Rapid development and deployment of cutting-edge technologies to keep you ahead of the competition."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security measures to protect your data and ensure compliance with industry standards."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A dedicated team of skilled professionals committed to bringing your vision to life."
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About AakashLabs</h2>
          <p className="section-subtitle">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that transform businesses and drive digital evolution across industries.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-mission-title">Our Mission</h3>
            <p className="about-mission-text">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe in creating sustainable digital transformations 
              that deliver measurable results.
            </p>
            <p className="about-mission-text">
              With years of experience in the industry, we have established ourselves as a trusted 
              partner for companies looking to leverage technology for competitive advantage.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-dot"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="stat-item">
                <div className="stat-dot"></div>
                <span>500+ Projects Delivered</span>
              </div>
              <div className="stat-item">
                <div className="stat-dot"></div>
                <span>50+ Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Our team working"
            />
            <div className="image-decoration"></div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;