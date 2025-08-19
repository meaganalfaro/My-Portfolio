import React from 'react';
import './SkillsAura.css';

const SkillsAura = ({ 
  title, 
  imageSrc,
  glowColor = '#E22797',
  size = 'medium' 
}) => {
  return (
    <div className={`skills-aura skills-aura--${size}`}>
      <div 
        className="aura-ball"
        style={{
          '--glow-color': glowColor
        }}
      >
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="aura-icon"
            onError={(e) => {
              console.error(`Error loading ${title} icon`);
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="aura-icon-placeholder"></div>
        )}
      </div>
      <p className="aura-title">{title}</p>
    </div>
  );
};

export default SkillsAura;
