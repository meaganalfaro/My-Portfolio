import React from 'react';
import './JobCard.css';
import '../assets/images/new-background.png';

const JobCard = ({ jobTitle, company, dates, description, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="job-card">
      <div className="job-card-content">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company-name">{company}</p>
        <p className="dates">{dates}</p>
        <div className="description">
          {Array.isArray(description) ? (
            <ul>
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

