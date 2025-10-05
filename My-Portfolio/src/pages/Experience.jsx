import React from 'react';
import Constellation from '../components/Constellation';
import './Experience.css';

const Experience = () => {
  const jobs = [
    {
      title: "Product Development Intern",
      company: "Walky",
      dates: "June 2025 - Present",
      description: [
        "Enhanced React dashboards by testing and debugging components to deliever a smooth, more consistent user experience."
      ]
    },
    {
      title: "AI Engineer",
      company: "Break Through Tech: AI Studio Fellow",
      dates: "July 2025 - Present",
      description: [
        "Predicted learner disengagement from EEG and survey data to recommend adaptive training content.",
      ]
    },
    {
      title: "AI Fellow",
      company: "Break Through Tech x Cornell University",
      dates: "Apr 2025 - July 2025",
      description: [
        "Developed ML projects with TensorFlow and scikit-learn after selection from 1,500+ applicants."
      ]
    }, 
    {
      title: "Software Engineering Intern",
      company: "Walky",
      dates: "May 2025",
      description: [
        "Delivered a React + CoreUI admin dashboard in 3 weeks with full auth, dark mode, and responsive layouts."
      ]
    },
    {
      title: "Co-Director of WiTCON",
      company: "Women in Computer Science at FIU",
      dates: "May 2024 - Mar 2025",
      description: [
        "Scaled Florida's largest student-run women in tech conference to 700+ attendees and record sponsorships."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Florida International University",
      dates: "Aug 2024 - Dec 2024",
      description: [
        "Boosted student success in OOP, guided 60+ learners to earn a 90% satisfaction rate."
      ]
    }, 
    {
      title: "Selected Participant",
      company: "Capital One Mini-Mester",
      dates: "July 2024 - Aug 2024",
      description: [
        "Completed a 5-day immersive with 20+ hours of JavaScript, Node.js, and CLI development, including a peer hackathon."
      ]
    }, 
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        <p className="experience-subtitle">Click to view my professional journey through the stars</p>
        <div className="constellation-section">
          <Constellation jobs={jobs} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
