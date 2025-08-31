import React, { useState, useEffect, useRef } from 'react';
import JobCard from './JobCard';
import constellationSvg from '../assets/experience/constellation.svg';
import './Constellation.css';
import '../styles/design-system.css';

const Constellation = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const constellationRef = useRef(null);

  // Dynamically generate star positions based on the number of jobs
  // This makes it automatically scalable when you add more jobs
  const generateStarPositions = (jobsArray) => {
    const positions = [];
    const numJobs = jobsArray.length;
    
    // Base positions for visual balance - these can be adjusted
    const basePositions = [
      // Left constellation area
      { top: 46, left: 48 },
      { top: 46, left: 238 },
      { top: 182, left: 130 },
      { top: 285, left: 371 },
      { top: 183, left: 532 },
      // Right constellation area
      { top: 42, left: 511 },
      { top: 92, left: 740 },
      { top: 203, left: 833 },
      { top: 277, left: 1035 },
      { top: 159, left: 1192 },
      { top: 42, left: 1165 },
    ];

    // Distribute jobs across available positions
    basePositions.forEach((pos, index) => {
      const jobId = index % numJobs; // This ensures even distribution
      positions.push({
        id: index,
        top: pos.top,
        left: pos.left,
        jobId: jobId,
        glowColor: 'var(--color-constellation-white)'
      });
    });

    return positions;
  };

  const starPositions = generateStarPositions(jobs);

  const handleStarClick = (jobId) => {
    if (selectedJob === jobId) {
      setSelectedJob(null);
    } else {
      setSelectedJob(jobId);
    }
  };

  // Handle click outside to close job card
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is on a star (don't close if clicking on stars)
      const isStarClick = event.target.closest('.constellation-star');
      if (isStarClick) {
        return; // Don't close if clicking on a star
      }
      
      // Check if the click is on the job card itself (don't close if clicking inside)
      const jobCard = event.target.closest('.job-card-popup-fixed');
      if (jobCard) {
        return; // Don't close if clicking inside the job card
      }
      
      // If we get here, the click is either outside the container or on empty space inside
      // Close the job card
      setSelectedJob(null);
    };

    if (selectedJob !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [selectedJob]);

  // Convert SVG coordinates to CSS percentages with offset adjustment
  const getStarPosition = (star) => {
    const svgWidth = 1241;
    const svgHeight = 326;
    
    // Add small offsets to fine-tune positioning
    const offsetX = 0; // Adjust this if stars are too far left/right
    const offsetY = 0; // Adjust this if stars are too far up/down
    
    return {
      top: `${((star.top + offsetY) / svgHeight) * 100}%`,
      left: `${((star.left + offsetX) / svgWidth) * 100}%`
    };
  };

  return (
    <div className="constellation-container" ref={constellationRef}>
      {/* Cosmic Background */}
      <div className="cosmic-background">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      {/* Constellation SVG with Recreated Stars on Top */}
      <div className="constellation-svg-container">
        <img 
          src={constellationSvg} 
          alt="Constellation" 
          className="constellation-image"
        />
        
        {/* Recreated Constellation Stars - positioned over the SVG */}
        {starPositions.map((star) => {
          const position = getStarPosition(star);
          return (
            <div
              key={star.id}
              className="constellation-star"
              style={{
                top: position.top,
                left: position.left,
                '--glow-color': star.glowColor
              }}
              onClick={() => handleStarClick(star.jobId)}
            />
          );
        })}
      </div>

      {/* Job Card Popup - Fixed Position */}
      {selectedJob !== null && (
        <div className="job-card-popup-fixed">
          <JobCard
            jobTitle={jobs[selectedJob].title}
            company={jobs[selectedJob].company}
            dates={jobs[selectedJob].dates}
            description={jobs[selectedJob].description}
            isVisible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Constellation;
