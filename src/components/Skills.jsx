import React, { useEffect, useRef } from 'react';
import {
  SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiReact,
  SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiPostgresql,
  SiOpenai, SiGit
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './Skills.css';
import SectionParallax from './SectionParallax';

const skillCategories = [
  {
    category: 'Languages & Markup',
    skills: [
      { name: 'Python',      icon: <SiPython />,     color: '#3776AB' },
      { name: 'JavaScript',  icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'TypeScript',  icon: <SiTypescript />, color: '#3178C6' },
      { name: 'HTML5',       icon: <SiHtml5 />,      color: '#E34F26' },
      { name: 'CSS3',        icon: <SiCss />,        color: '#1572B6' },
    ],
  },
  {
    category: 'Frontend & Backend',
    skills: [
      { name: 'React',        icon: <SiReact />,     color: '#61DAFB' },
      { name: 'React Native', icon: <SiReact />,     color: '#61DAFB' },
      { name: 'Node.js',      icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js',   icon: <SiExpress />,   color: '#cccccc' },
      { name: 'REST API',     icon: <TbApi />,        color: '#00BCD4' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
      { name: 'Gen AI',     icon: <SiOpenai />,     color: '#74aa9c' },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };

  return (
    <div
      ref={cardRef}
      className="skill-card glass-panel floating"
      style={{
        '--brand': skill.color,
        '--i': index,
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <SectionParallax />
      <div className="container">
        <div className="section-header reveal reveal-up">
          <div className="section-bg-text">SKILLS</div>
          <h2 className="section-title text-gradient">Technical Skills</h2>
        </div>
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="skill-category reveal reveal-up">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
