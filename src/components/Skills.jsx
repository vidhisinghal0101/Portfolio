import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql,
  SiHtml5, SiCss, SiReact, SiNodedotjs,
  SiExpress, SiMysql, SiMongodb, SiOpenai
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, color: 'var(--text-primary)' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Gen AI', icon: <SiOpenai />, color: '#74aa9c' }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title text-gradient reveal reveal-up">Technical Skills</h2>
        <div className="skills-grid reveal reveal-up">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-panel floating" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
