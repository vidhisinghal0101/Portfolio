import React, { useState } from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This will open the user's email client (Gmail/Outlook/etc.) 
    // with the message already written for them.
    const mailtoLink = `mailto:vidhisinghal102@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${encodeURIComponent(
      `Hi Vidhi,\n\nMy name is ${formData.name} (Contact: ${formData.phone}).\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <h2 className="section-title text-gradient reveal reveal-up">Let's Get In Touch</h2>
        <p className="contact-desc reveal reveal-up">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="contact-content reveal reveal-up">
          <div className="contact-info glass-panel decorative-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">vidhisinghal102@gmail.com</span>
            </div>
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
            <div className="info-item">
              <span className="info-label">LeetCode:</span>
              <a href="https://leetcode.com/u/vidhisinghal0101/" target="_blank" rel="noopener noreferrer" className="info-value">vidhisinghal0101</a>
            </div>
          </div>

          <form className="contact-form glass-panel decorative-card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} className="form-input" rows="5" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
