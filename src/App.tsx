import React from 'react';
import './App.css';
import MainSection from './components/main-section/main-section.tsx';
import Navbar from './components/navbar/navbar.tsx';
import AboutSection from './components/about-section/about-section.tsx';
import ProjectsSection from './components/projects-section/projects-section.tsx';
import ContactSection from './components/contact-section/contact-section.tsx';
import ResumeSection from './components/resume-section/resume-section.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}

export default App;
