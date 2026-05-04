import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Budget Buddy',
    tech: 'React | Node.js | Express | MongoDB | Tailwind CSS | JavaScript | HTML | CSS',
    description: 'Budget Buddy is a full-stack website designed to simplify personal finance management with a responsive UI and secure authentication.',
    image: 'data:image/png;base64,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',
    links: [
      { text: 'GitHub', url: 'https://github.com/vidhisinghal0101/Budget_Buddy' },
      { text: 'Live Demo', url: 'https://budget-buddy-two-sandy.vercel.app/' },

    ]
  }]
//   {
//     id: 2,
//     title: 'AI Content Generator',
//     tech: 'OpenAI API, Next.js, Tailwind',
//     description: 'An AI-powered tool that helps creators generate content outlines and drafts.',
//     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     links: [
//       { text: 'GitHub', url: 'https://github.com/yourusername/ai-content-generator' },
//       { text: 'Live Demo', url: 'https://your-ai-demo.com' },

//     ]
//   },
//   {
//     id: 3,
//     title: 'Fintech Dashboard',
//     tech: 'Vue, D3.js, Firebase',
//     description: 'A finance dashboard visualizing real-time market data with interactive charts.',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     links: [
//       { text: 'GitHub', url: 'https://github.com/yourusername/fintech-dashboard' },
//       { text: 'Live Demo', url: 'https://your-fintech-demo.com' },

//     ]
//   }
// ];

const miniProjectsData = [
  {
    id: 1,
    title: 'House Price Prediction',
    tech: 'Python | scikit-learn| Panda | NumPy | Streamlit | LangGraph | HuggingFace | TF-IDF',
    description: 'Built an end-to-end ML system that predicts house prices and generates AI-driven BUY/HOLD/AVOID recommendations using market data and comparable properties.',
    links: [
      { text: 'GitHub', url: 'https://github.com/vidhisinghal0101/house-price-prediction-ml.git' },
      { text: 'Live Demo', url: 'https://house-price-prediction-ml-p-9.streamlit.app/' },

    ]
  },
  {
    id: 2,
    title: 'To-Do List',
    tech: 'JavaScript | Local Storage',
    description: 'A minimalist task manager to keep track of daily activities.',
    link: '#'
  },
  {
    id: 3,
    title: 'Calculator',
    tech: 'HTML | CSS | JS',
    description: 'A beautifully designed calculator with basic arithmetic operations.',
    link: '#'
  }
];

const Projects = () => {
  const [showMini, setShowMini] = useState(false);
  const miniProjectsRef = useRef(null);

  useEffect(() => {
    if (showMini && miniProjectsRef.current) {
      // Small delay to allow the element to be rendered and animation to start
      setTimeout(() => {
        miniProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showMini]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header reveal reveal-up">
          <h2 className="section-title text-gradient">My Projects</h2>
          <button className="mini-projects-btn" onClick={() => setShowMini(!showMini)}>
            <span className="text-gradient">{showMini ? 'Hide Mini Projects' : 'View Mini Projects'}</span>
          </button>
        </div>
        <div className="project-grid reveal reveal-up">
          {projectsData.map(project => (
            <div key={project.id} className={`project-card glass-panel ${project.id === 1 ? 'centered' : ''}`}>
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.description}</p>
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

        {/* Mini Projects Section */}
        {showMini && (
          <div ref={miniProjectsRef} className="mini-projects-section fade-in">
            <h3 className="mini-section-title text-gradient">Mini Projects</h3>
            <div className="mini-project-grid">
              {miniProjectsData.map(project => (
                <div key={project.id} className="mini-project-card glass-panel">
                  <h4 className="mini-project-title">{project.title}</h4>
                  <p className="mini-project-tech">{project.tech}</p>
                  <p className="mini-project-desc">{project.description}</p>
                  <a href={project.link} className="project-link" onClick={(e) => e.preventDefault()}>View Project →</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
