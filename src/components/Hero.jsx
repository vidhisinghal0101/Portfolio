import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';
import SectionParallax from './SectionParallax';

const roles = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const displayed = roles[roleIndex].slice(0, charIndex);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      // Typing
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      // Pause at full word
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => setCharIndex(i => i - 1), 45);
    } else if (deleting && charIndex === 0) {
      // Move to next role
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // The parallax is now handled by SectionParallax component

  const handleMagneticMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMagneticReset = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="glass-panel hero-card">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name text-gradient">Vidhi Singhal</h1>
          <h3 className="role accent-gradient">
            &lt; <span className="typed-text">{displayed}</span> &gt;
          </h3>
          <p className="bio">
            Computer Science student with a strong foundation in full-stack development, Artificial Intelligence, and problem-solving. Experienced in building AI powered applications and real-world software projects, 250+ LeetCode.
          </p>
          <div className="cta-group">
            <a href="#projects" className="btn-primary" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticReset}>View My Work</a>
            <a href="#contact" className="btn-primary" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticReset}>Get In Touch</a>
            <a href="#skills" className="btn-primary" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticReset}>View My Skills</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/vidhisinghal0101" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/vidhi-singhal-228b32315" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:vidhisinghal102@gmail.com" className="hero-social-btn" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://leetcode.com/u/vidhisinghal0101/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
      
      {/* Parallax Background */}
      <SectionParallax />
    </section>
  );
};

export default Hero;
