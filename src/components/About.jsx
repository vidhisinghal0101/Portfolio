import React from 'react';
import './About.css';



const hobbies = [
  'Book Reading', 'Makeup Art', 'Gym', 'Swimming',
  'Dancing', 'Singing', 'Social Media Content',
  'Language Learning [Hindi, English, German (A2)]'
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-text-container reveal reveal-up">
          <h2 className="section-title text-gradient">About Me</h2>

          {/* <p className="about-text">
            When I'm not coding, I love staying active, hitting the gym, swimming, getting lost in a good book and learning new languages. I also enjoy fully expressing my creative side through makeup art, dancing, singing, and creating content for social media!
          </p> */}

          <div className="resume-section">
            <h3 className="subsection-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology (B.Tech) - Computer Science</h4>
              <p className="resume-meta">Newton School of Technology, Rishihood University | Expected May 2028</p>
            </div>
            <div className="resume-item">
              <h4>Class XII (Senior Secondary) - 86%</h4>
              <p className="resume-meta">St. John's School, Faridabad | Jan 2024</p>
            </div>
            <div className="resume-item">
              <h4>Class X (Secondary) - 93%</h4>
              <p className="resume-meta">St. John's School, Faridabad | Jan 2022</p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="subsection-title">Experience</h3>
            <div className="resume-item">
              <h4>Web & React-Native Developer Intern</h4>
              <p className="resume-meta">Vybout| June 2026 </p>
              <p className="resume-desc">Built and shipped scalable web & mobile features using React, React Native, Next.js, Supabase, and PostgreSQL, owning everything from UI to backend integration.</p>
            </div>
            <div className="resume-item">
              <h4>Social Media Content Intern</h4>
              <p className="resume-meta">DreamHitch | Oct 2024</p>
              <p className="resume-desc">Secured this internship utilizing content creation experience to develop engaging media for digital platforms.</p>
            </div>

            <div className="resume-item">
              <h4>Content Writing Intern</h4>
              <p className="resume-meta">Mindeneous | April 2026</p>
              <p className="resume-desc">Assisted in writing articles, social media posts, and promotional content while maintaining clarity, consistency, and audience engagement.</p>
            </div>
          </div>



          <div className="resume-section">
            <h3 className="subsection-title">Hobbies & Interests</h3>
            <div className="skills-container">
              {hobbies.map(hobby => (
                <div key={hobby} className={`skill-tag ${hobby.includes('Language') ? 'highlight-tag' : ''}`}>{hobby}</div>
              ))}
            </div>
          </div>

        </div>
        <div className="about-image-container">
          <div className="image-wrapper glass-panel">
            <img src="https://i.pinimg.com/736x/08/70/c0/0870c06d6a0b9fe7eff0894ae02d9f46.jpg" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
