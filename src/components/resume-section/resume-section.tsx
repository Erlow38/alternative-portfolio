import './resume-section.css';
import React from 'react';

const ResumeSection: React.FC = () => {
  return (
    <section className="resume-section" id="resume">
        <h1>Resume</h1>
        <div className="resume-container">
            <div className="resume-info">
                <h4>Experience</h4>
                <div className="experience">
                    <h5>Alternant développeur web</h5>
                    <p>Septembre 2023 - Aout 2024</p>
                    <p>Développé une application web en utilisant Next.js et Python</p>
                </div>
                <div className="experience">
                    <h5>Stagiaire développeur web</h5>
                    <p>Avril 2023 - Juin 2023</p>
                    <p>Développé une application web en utilisant JavaScript et Node.js</p>
                </div>
                <h4>Education</h4>
                <div className="education">
                    <h5>BUT Informatique</h5>
                    <p>IUT 2 de Grenoble</p>
                    <p>September 2021 - Juillet 2024</p>
                </div>
            </div>
            <div className="resume-skills">
                <h4>Skills</h4>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ResumeSection;