import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const mailtoLink = `mailto:vidhisinghal102@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
  //   window.location.href = mailtoLink;
  // };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <h2 className="section-title text-gradient">Let's Get In Touch</h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="contact-content">
          <div className="contact-info glass-panel">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:vidhisinghal102@gmail.com" className="info-value">vidhisinghal102@gmail.com</a>
            </div>
            {/* <div className="info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+917982219925" className="info-value">+91 7982219925</a>
            </div> */}
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Sonipat, Haryana</span>
            </div>
            <div className="info-item">
              <span className="info-label">Socials:</span>
              <div className="social-links">
                <a href="https://linkedin.com/in/vidhi-singhal-228b32315" target="_blank" rel="noopener noreferrer" className="info-value">LinkedIn</a>
                <a href="https://github.com/vidhisinghal0101" target="_blank" rel="noopener noreferrer" className="info-value">GitHub</a>
              </div>
            </div>
          </div>

          {/* <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} className="form-input" rows="5" placeholder="Hello..." required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
