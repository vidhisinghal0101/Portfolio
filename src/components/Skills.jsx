import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiReact,
  SiNodedotjs, SiExpress, SiPrisma,
  SiMysql, SiMongodb, SiPostgresql,
  SiOpenai
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './Skills.css';

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
      { name: 'React',        icon: <SiReact />,        color: '#61DAFB' },
      { name: 'React Native', icon: <SiReact />,        color: '#61DAFB' },
      { name: 'Node.js',      icon: <SiNodedotjs />,    color: '#339933' },
      { name: 'Express.js', subtitle: 'Prisma ORM', icon: <SiExpress />, color: 'var(--text-primary)' },
      { name: 'REST / FastAPI', icon: <TbApi />,         color: '#009485' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
      { name: 'Gen AI', subtitle: 'RAG, LLMs', icon: <SiOpenai />, color: '#74aa9c' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title text-gradient reveal reveal-up">Technical Skills</h2>
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="skill-category reveal reveal-up">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card glass-panel floating"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                  {skill.subtitle && <span className="skill-subtitle">{skill.subtitle}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
