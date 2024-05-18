import './main-section.css';
import React, { useEffect } from 'react';

const MainSection: React.FC = () => {

    useEffect(() => {
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');

        window.addEventListener('scroll', () => {
            if (!h1 || !h2) return;
            let scrollPosition = window.scrollY;
            let scaleValue = 1 + scrollPosition * 2 / 1000;
            h1.style.transform = `scale(${scaleValue})`;
            h2.style.transform = `scale(${scaleValue})`;
        });
        
    }, []);

  return (
    <section className="main-section" id='main'>
        <h1>ETHAN EHRLER</h1>
        <h2>WEB DEVELOPER</h2>
        <h3>PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO</h3>
        <svg className="bounce-arrow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/></svg>
    </section>
  )
}

export default MainSection;