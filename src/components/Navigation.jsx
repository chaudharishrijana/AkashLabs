import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'API Demo', href: '/api-demo' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <Code className="brand-icon" />
              <span className="brand-text">AakashLabs</span>
            </Link>
          </div>
          
          <div className="nav-desktop">
            <div className="nav-links">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="nav-mobile">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;