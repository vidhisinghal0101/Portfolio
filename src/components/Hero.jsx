import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="glass-panel hero-card">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name text-gradient">Vidhi Singhal</h1>
          <h3 className="role accent-gradient">Full Stack Developer</h3>
          <p className="bio">
            Computer Science student with knowledge of full-stack development and experience building small projects. Passionate about strengthening core concepts through hands-on practice and problem-solving. Growing a little everyday✨.
          </p>
          <div className="cta-group">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">View My Resume</a>
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
