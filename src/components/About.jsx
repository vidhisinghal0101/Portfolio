import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-text-container reveal reveal-up">
          <h2 className="section-title text-gradient">About Me</h2>

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
              <div className="resume-section">
                <h3 className="subsection-title">Education Journey</h3>
                <div className="resume-item">
                  <h4>Bachelor of Technology (B.Tech) - Computer Science</h4>
                  <p className="resume-meta">Newton School of Technology, Rishihood University | Expected May 2028</p>
                </div>
                <div className="resume-item">
                  <h4>Class XII (Senior Secondary) - 90%</h4>
                  <p className="resume-meta">St. John's School, Faridabad | Jan 2024</p>
                </div>
                <div className="resume-item">
                  <h4>Class X (Secondary) - 93%</h4>
                  <p className="resume-meta">St. John's School, Faridabad | Jan 2022</p>
                </div>
                <div className="resume-item">
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
              <div className="resume-section">
                <h3 className="subsection-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>React Native Developer Intern</h4>
                  <p className="resume-meta">Vybout | Apr 2026</p>
                  <p className="resume-desc">Built and shipped mobile & web features using React Native, React.js, Next.js, and PostgreSQL across the full product lifecycle. Developed reusable cross-platform UI components and integrated frontend systems with backend APIs.</p>
                </div>
                <div className="resume-item">
                  <h4>Social Media Content Intern</h4>
                  <p className="resume-meta">DreamHitch | Oct 2024</p>
                  <p className="resume-desc">Secured this internship utilizing content creation experience to develop engaging media for digital platforms.</p>
                </div>
                <div className="resume-item">
                  <h4>Content Writing Intern</h4>
                  <p className="resume-meta">Mindeneous | Apr 2026</p>
                  <p className="resume-desc">Assisted in writing articles, social media posts, and promotional content while maintaining clarity, consistency, and audience engagement.</p>
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
