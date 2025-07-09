import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.aakashlabs.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to transform your business with cutting-edge technology? Get in touch with our team.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

           
            <div className="contact-details-icons">
            
              <div className="contact-icon-item">
                <div className="icon-wrapper" tabIndex={0}>
                  <Mail />
                  <span className="icon-tooltip">info@aakashlabs.com</span>
                </div>
              </div>

            
              <div className="contact-icon-item">
                <div className="icon-wrapper" tabIndex={0}>
                  <Phone />
                  <span className="icon-tooltip">+977-1-4430196</span>
                </div>
              </div>

              
              <div className="contact-icon-item">
                <div
                  className="icon-wrapper"
                  tabIndex={0}
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/place/Laxmi+Plaza,+Putalisadak-32,+Kathmandu+44600',
                      '_blank'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                  title="Click to open in Google Maps"
                >
                  <MapPin />
                  
                </div>
              </div>
            </div>
          </div>

         
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary form-submit"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
