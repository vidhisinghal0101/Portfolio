import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import dawnboxImg from '../assets/dawnbox.png';
import budgetBuddyImg from '../assets/budgetbuddy.png';
import housePredImg from '../assets/house-prediction.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Budget Buddy',
    tech: 'React 18 · Vite · Tailwind CSS · Recharts · Node.js · Express · Prisma ORM · PostgreSQL (Neon) · JWT',
    description: [
      'Built and deployed a full-stack finance app with React (Vercel), Express (Render), and PostgreSQL (Neon)',
      'Implemented JWT authentication, role-based access control, and transaction CRUD with filtering, search, and pagination',
      'Built interactive analytics dashboards using Recharts with budget tracking and visual spending alerts',
    ],
    image: budgetBuddyImg,
    links: [
      { text: 'GitHub', url: 'https://github.com/vidhisinghal0101/Budget_Buddy' },
      { text: 'Live Demo', url: 'https://budget-buddy-two-sandy.vercel.app/' }
    ]
  },
  {
    id: 2,
    title: 'DawnBox',
    tech: 'Next.js · Tailwind CSS · Zustand · FastAPI · LangGraph · SQLAlchemy · Groq (Llama 3.1) · PostgreSQL · JWT',
    description: [
      'Built and deployed a full-stack developer productivity app aggregating GitHub and Gmail notifications into a unified AI-curated feed',
      'Designed a multi-step LangGraph pipeline using Groq\'s Llama 3.1 to score urgency, assign action tags, and generate morning briefings',
      'Implemented JWT auth with FastAPI and async SQLAlchemy ORM for secure, efficient backend data handling',
    ],
    image: dawnboxImg,
    links: [
      { text: 'GitHub', url: 'https://github.com/vidhisinghal0101/DawnBox.git' },
      { text: 'Live Demo', url: 'https://dawn-box.vercel.app/' }
    ]
  }
];

const miniProjectsData = [
  {
    id: 1,
    title: 'House Price Prediction',
    tech: 'Python · scikit-learn · Pandas · NumPy · Streamlit · LangGraph · HuggingFace · TF-IDF',
    description: 'Built an end-to-end ML system that predicts house prices and generates AI-driven BUY/HOLD/AVOID recommendations using market data and comparable properties.',
    image: housePredImg,
    group: true,
    links: [
      { text: 'GitHub', url: 'https://github.com/vidhisinghal0101/house-price-prediction-ml.git' },
      { text: 'Live Demo', url: 'https://house-price-prediction-ml-p-9.streamlit.app/' },
    ]
  },
];

const Projects = () => {
  const [showMini, setShowMini] = useState(false);
  const miniProjectsRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    if (showMini && miniProjectsRef.current) {
      setTimeout(() => {
        miniProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  }, [showMini]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header reveal reveal-up">
          <h2 className="section-title text-gradient">My Projects</h2>
        </div>

        <div className="project-grid reveal reveal-up">
          {/* Mini Projects card — first in grid */}
          <div
            className={`project-card mini-card glass-panel ${showMini ? 'mini-card--open' : ''}`}
            onClick={() => setShowMini(prev => !prev)}
            onMouseMove={handleMouseMove}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setShowMini(prev => !prev)}
            aria-expanded={showMini}
          >
            {/* Animated Background Elements for the Lab Theme */}
            <div className="mini-card-glow-bg"></div>
            <div className="mini-card-grid-pattern"></div>
            <div className="mini-card-bubbles">
              <span className="bubble bubble-1"></span>
              <span className="bubble bubble-2"></span>
              <span className="bubble bubble-3"></span>
            </div>

            <div className="mini-card-header">
              <span className="mini-card-badge">🧪 Lab Playground</span>
              <div className="mini-card-icon-wrapper">
                <span className="mini-card-icon">⚗️</span>
              </div>
            </div>

            <div className="mini-card-info-wrapper">
              <h3 className="project-title text-gradient-purple">Mini Projects</h3>
              <span className="mini-card-count-pill">
                {miniProjectsData.length} Active {miniProjectsData.length !== 1 ? 'Experiments' : 'Experiment'}
              </span>
              <p className="mini-card-desc">
                A sandbox of creative coding, interactive components, ML prototypes, and custom UI builds.
              </p>
            </div>

            <div className="mini-card-footer">
              <span className="mini-card-cta-btn">
                {showMini ? 'Collapse View ↑' : 'Explore Sandbox →'}
              </span>
            </div>
          </div>

          {/* Main projects */}
          {projectsData.map(project => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-container">
                  {project.tech.split(' · ').map((tech, i) => (
                    <span key={i} className="project-tech-pill">{tech}</span>
                  ))}
                </div>
                <ul className="project-desc">
                  {Array.isArray(project.description)
                    ? project.description.map((point, i) => <li key={i}>{point}</li>)
                    : <li>{project.description}</li>}
                </ul>
                <div className="project-links">
                  {project.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>
                      {link.text} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects expanded section */}
        <div
          ref={miniProjectsRef}
          id="mini-projects"
          className={`mini-projects-section ${showMini ? 'mini-projects-section--visible' : ''}`}
        >
          <h3 className="mini-section-title text-gradient">Mini Projects</h3>
          <div className="mini-project-grid">
            {miniProjectsData.map((project, index) => (
              <div
                key={project.id}
                className="mini-project-card glass-panel"
                style={{ '--index': index }}
              >
                  {project.image && (
                    <div className="project-img-container">
                      <img src={project.image} alt={project.title} className="project-img" />
                      {project.group && (
                        <span className="group-badge">👥 Group Project</span>
                      )}
                    </div>
                  )}
                  <div className="project-info">
                    <h4 className="mini-project-title">{project.title}</h4>
                    <div className="mini-project-tech-container">
                      {project.tech.split(' · ').map((tech, i) => (
                        <span key={i} className="mini-project-tech-pill">{tech}</span>
                      ))}
                    </div>
                    <p className="mini-project-desc">{project.description}</p>
                    <div className="project-links">
                      {project.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                          {link.text} →
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
