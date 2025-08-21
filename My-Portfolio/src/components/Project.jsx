import React, { useState } from 'react';
import './Project.css';

const Project = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  isPDF = false,
  technologies = [] 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) {
      if (isPDF) {
        // Open PDF in new tab
        window.open(link, '_blank');
      } else {
        // Navigate to external link
        window.open(link, '_blank');
      }
    }
  };

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="project-image-container">
        <img 
          src={imageSrc} 
          alt={title} 
          className="project-image"
          onError={(e) => {
            console.error(`Error loading ${title} image`);
            e.target.style.display = 'none';
          }}
        />
        
        {/* Hover overlay */}
        <div className={`project-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="project-overlay-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            
            {technologies.length > 0 && (
              <div className="project-technologies">
                {technologies.map((tech, index) => (
                  <span key={index} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            <div className="project-click-hint">
              {isPDF ? 'Click to view PDF' : 'Click to visit project'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
