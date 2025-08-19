import React from 'react';
import SkillsAura from '../components/SkillsAura';
import '../styles/design-system.css';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'React',
      imageSrc: '/src/assets/skills/react.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'JavaScript',
      imageSrc: '/src/assets/skills/javascript.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Collaboration',
      imageSrc: '/src/assets/skills/collaboration.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Java',
      imageSrc: '/src/assets/skills/java.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'CoreUI',
      imageSrc: '/src/assets/skills/core-ui.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Scikit-learn',
      imageSrc: '/src/assets/skills/scikit-learn.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Pandas',
      imageSrc: '/src/assets/skills/pandas.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'Communication',
      imageSrc: '/src/assets/skills/communication.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'Git',
      imageSrc: '/src/assets/skills/git.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Jest',
      imageSrc: '/src/assets/skills/jest.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'React Testing Library',
      imageSrc: '/src/assets/skills/react-testing-library.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'TensorFlow',
      imageSrc: '/src/assets/skills/tensorflow.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Agile Development',
      imageSrc: '/src/assets/skills/agile.svg',
      glowColor: 'var(--color-ombre-pink)'
    },
    {
      title: 'Leadership',
      imageSrc: '/src/assets/skills/leadership.svg',
      glowColor: 'var(--color-header-blue)'
    },
    {
      title: 'REST APIs',
      imageSrc: '/src/assets/skills/rest-api.svg',
      glowColor: 'var(--color-aura-purple)'
    },
    {
      title: 'Problem Solving',
      imageSrc: '/src/assets/skills/problem-solving.svg',
      glowColor: 'var(--color-aura-purple)'
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
