import './about-section.css';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
    <h1>About Me</h1>
        <div className="about-container">
            <p>Hi, I'm Ethan Ehrler. I'm a web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and more. I'm always looking to learn new things and improve my skills.</p>
            <img src="img/me.jpg" alt="" />
        </div>
    </section>
  )
}

export default AboutSection;