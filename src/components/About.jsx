import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './About.css';
import SectionParallax from './SectionParallax';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="about" id="about">
      <SectionParallax />
      <div className="container about-content">
        <div className="about-text-container reveal reveal-up">
          <div className="section-header">
            <div className="section-bg-text">ABOUT</div>
            <h2 className="section-title text-gradient">About Me</h2>
          </div>

          {/* Interactive Glassmorphic Tab Switching Panel */}
          <div className="about-tabs glass-panel">
            <button
              className={`about-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap /> Education
            </button>
            <button
              className={`about-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase /> Experience
            </button>

          </div>

          <div className="tab-content-panel fade-in-slide" key={activeTab}>
            {activeTab === 'education' && (
              <div className="timeline-section">
                <h3 className="subsection-title">Education Journey</h3>
                <div className="timeline-item">
                  <h4>Bachelor of Technology (B.Tech) - Computer Science</h4>
                  <p className="timeline-meta">Newton School of Technology, Rishihood University | Expected May 2028</p>
                </div>
                <div className="timeline-item">
                  <h4>Class XII (Senior Secondary) - 90%</h4>
                  <p className="timeline-meta">St. John's School, Faridabad | Jan 2024</p>
                </div>
                <div className="timeline-item">
                  <h4>Class X (Secondary) - 93%</h4>
                  <p className="timeline-meta">St. John's School, Faridabad | Jan 2022</p>
                </div>
                <div className="timeline-item">
                  <h4 style={{ marginBottom: '0.8rem' }}>Languages</h4>
                  <div className="skills-container">
                    <span className="skill-tag highlight-tag">Hindi</span>
                    <span className="skill-tag highlight-tag">English</span>
                    <span className="skill-tag highlight-tag">German (A2)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="timeline-section">
                <h3 className="subsection-title">Professional Experience</h3>
                <div className="timeline-item">
                  <h4>AI Engineer & SDE Intern</h4>
                  <p className="timeline-meta">Studyzone365 (Study2Win Pvt Ltd) | September 2026 </p>
                  <ul className="timeline-desc">
                    <li>Spearheading research and development for a new AI-driven project, identifying innovative solutions and technical requirements.</li>
                    <li>Designing and structuring comprehensive new courses focusing on study abroad preparation and coding/programming.</li>
                    <li>Led frontend development for the company's website, ensuring optimal performance, seamless user experience, and up-to-date content.</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <h4>React Native Developer Intern</h4>
                  <p className="timeline-meta">Vybout | April 2026</p>
                  <ul className="timeline-desc">
                    <li>Built and shipped mobile & web features using React Native, React.js, Next.js, and PostgreSQL across the full product lifecycle.</li>
                    <li>Developed reusable cross-platform UI components and integrated frontend systems with backend APIs.</li>
                    <li>Gained hands-on early-stage startup experience working end-to-end in fast-paced, high-velocity teams.</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <h4>Social Media Content Intern</h4>
                  <p className="timeline-meta">DreamHitch | October 2024</p>
                  <ul className="timeline-desc">
                    <li>At DreamHitch, I worked as a Social Media Content Intern for a very short period.</li>
                    <li>My primary responsibility was creating a marketing presentation about the company's platform.</li>
                    <li>I researched the website, understood its features, services, and value proposition, and converted that information into a clear and engaging presentation that could be used for marketing and communication purposes.</li>
                  </ul>
                </div>
              </div>
            )}


          </div>

        </div>
        <div className="about-image-container">
          <div className="image-wrapper glass-panel">
            <img src={profileImg} className="about-img" alt="Vidhi Singhal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
