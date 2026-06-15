import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleMagneticMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    item.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const handleMagneticReset = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_6cj9des',
      'template_yeik4es',
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      },
      'wWVUwayEUp_DKGzWi'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
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
                <a
                  href="https://linkedin.com/in/vidhi-singhal-228b32315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticReset}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/vidhisinghal0101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticReset}
                >
                  <FaGithub /> GitHub
                </a>
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
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder=" "
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder=" "
                required
              />
              <label htmlFor="phone">Contact Number</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                rows="5"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={status === 'sending'}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-status success" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status error" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <FaExclamationCircle /> Something went wrong. Try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
