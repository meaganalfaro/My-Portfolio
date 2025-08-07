import React from 'react';
import altBackground from '../assets/images/alt-background.png';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id="about">   
            <div className="about-content">
                <div className="about-container">
                    <h1 className="about-heading">About Me</h1>
                    
                    <div className="about-text">
                        <p className="about-paragraph">
                            Hi everyone! I'm Meagan Alfaro, a Computer Science student also earning my Master's in Cybersecurity. 
                            I'm graduating this May with my B.S. and currently looking for junior software engineering roles, 
                            developer positions, or cybersecurity internships.
                        </p>
                        
                        <p className="about-paragraph">
                            I care deeply about people, and that compassion fuels the kind of technology I want to build. 
                            Whether it's intuitive frontend design, helpful machine learning models, or a simple interaction 
                            with tech that leaves a mark, I want my work to make life better and more beautiful for others.
                        </p>
                        
                        <p className="about-paragraph">
                            When I'm not coding, you'll probably find me lifting weights or spending time with my dog, Vienna.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;