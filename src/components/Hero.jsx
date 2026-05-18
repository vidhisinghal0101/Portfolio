import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

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
            <span className="typed-text">{displayed}</span>
            <span className="cursor">|</span>
          </h3>
          <p className="bio">
            Computer Science student with knowledge of full-stack development and experience building small projects. Passionate about strengthening core concepts through hands-on practice and problem-solving. Growing a little everyday✨.
          </p>
          <div className="cta-group">
            <a
              href="#projects"
              className="btn-primary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-primary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
            >
              Get In Touch
            </a>
            <a
              href="#skills"
              className="btn-primary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
            >
              View My Skills
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="circle-shape shape-1"></div>
      <div className="circle-shape shape-2"></div>
    </section>
  );
};

export default Hero;
