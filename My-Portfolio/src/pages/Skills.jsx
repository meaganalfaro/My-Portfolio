import React from 'react';
import SkillsAura from '../components/SkillsAura';
import '../styles/design-system.css';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'React',
      imageSrc: '/skills/react.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'JavaScript',
      imageSrc: '/skills/javascript.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Collaboration',
      imageSrc: '/skills/collaboration.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Java',
      imageSrc: '/skills/java.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'CoreUI',
      imageSrc: '/skills/core-ui.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Scikit-learn',
      imageSrc: '/skills/scikit-learn.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Pandas',
      imageSrc: '/skills/pandas.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'Communication',
      imageSrc: '/skills/communication.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Git',
      imageSrc: '/skills/git.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Jest',
      imageSrc: '/skills/jest.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'React Testing Library',
      imageSrc: '/skills/react-testing-library.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'TensorFlow',
      imageSrc: '/skills/tensorflow.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Agile Development',
      imageSrc: '/skills/agile.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'Leadership',
      imageSrc: '/skills/leadership.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'REST APIs',
      imageSrc: '/skills/rest-api.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Problem Solving',
      imageSrc: '/skills/problem-solving.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <p className="skills-subtitle">Technologies I work with to bring ideas to life</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillsAura
              key={index}
              title={skill.title}
              imageSrc={skill.imageSrc}
              glowColor={skill.glowColor}
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
