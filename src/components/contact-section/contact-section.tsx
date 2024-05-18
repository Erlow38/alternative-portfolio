import './contact-section.css';
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-container">
            <div className="contact-info">
                <p>Email: ethan.ehrler@outlook.com</p>
                <p>Phone: 06 16 52 07 25</p>
                <p>LinkedIn: ethan ehrler</p>
                <p>GitHub: erlow38</p>
            </div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>
    </section>
    )
}

export default ContactSection;