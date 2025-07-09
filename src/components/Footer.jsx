import React from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/AakashLabs', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/aakash.labs/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://np.linkedin.com/company/aakashlabs', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    Services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'AI Solutions', href: '#' },
      { name: 'Cloud Services', href: '#' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-link">
              <Code className="brand-icon" />
              <span className="brand-text">AakashLabs</span>
            </div>
            <p className="footer-description">
              Empowering businesses with innovative technology solutions. We create digital experiences that drive growth and success.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-link"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-section">
              <h3 className="footer-section-title">{category}</h3>
              <ul className="footer-links">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 AakashLabs. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;