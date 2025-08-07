import React from 'react';
import heroImage from '../assets/Hero-Image.JPG';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Section - Profile Image */}
        <div className="hero-profile">
          <div className="profile-frame">
            <img 
              src={heroImage} 
              alt="Meagan Alfaro" 
              className="profile-image"
              onError={(e) => {
                console.error('Error loading hero image');
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="hero-content">
          <h1 className="hero-name">Meagan Alfaro</h1>
          <p className="hero-tagline">Blending code, design, and ML to enhance digital experiences.</p>
          
          <div className="hero-links">
            <a href="https://linkedin.com/in/meaganalfaro" target="_blank" rel="noopener noreferrer" className="hero-link">
              LinkedIn
            </a>
            <a href="/resume" className="hero-link">
              Resume
            </a>
            <a href="https://github.com/meaganalfaro" target="_blank" rel="noopener noreferrer" className="hero-link">
              Github
            </a>
          </div>

          <button className="btn btn-primary hero-cta">
            PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
