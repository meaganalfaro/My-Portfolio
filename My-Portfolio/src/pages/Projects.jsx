import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Project from '../components/Project';
import altBackground from '../assets/images/alt-background.png';
import './Projects.css';

const Projects = () => {
  // Sample projects - you can easily add more here
  const projects = [
    {
      title: "Movie & TV Show Rater",
      description: "A modern streaming platform interface with search, ratings, and navigation features.",
      imageSrc: "/src/assets/projects/movie-rater.svg",
      link: "https://github.com/meaganalfaro/MovieRater",
      isPDF: false,
      technologies: ["React", "TypeScript", "Semantic UI", "Git"]
    },
    {
      title: "WITCON Event Page",
      description: "Florida's largest student-led women in tech conference website. Exceeding double the attendance of previous years.",
      imageSrc: "/src/assets/projects/witcon-website.svg", 
      link: "https://wicsfiu.github.io/witcon-2025/",
      isPDF: false,
      technologies: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      title: "Machine Learning Research",
      description: "A world happiness prediction model using machine learning and data analysis.",
      imageSrc: "/src/assets/projects/World-happiness-project.svg",
      link: "/src/assets/projects/DefineAndSolveMLProblem.pdf", 
      isPDF: true,
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "Linear Regression", "Gradient Boosting"]
    },
    {
      title: "Admin Portal Unit Test",
      description: "Unit testing for the Admin Portal Website.",
      imageSrc: "/src/assets/projects/unit-tests.svg", 
      link: "/src/assets/projects/Walky_Admin_Portal_Unit_Test_Plan.pdf",
      isPDF: true,
      technologies: ["React", "Jest", "Jira", "Notion"]
    },
    {
      title: "Admin Portal Website",
      description: "Admin Portal Website for Walky, reducing company involvement in the onboarding process.",
      imageSrc: "/src/assets/projects/admin.svg", 
      link: "/src/assets/projects/Walky_Sprinternship.pdf",
      isPDF: true,
      technologies: ["React", "CoreUI", "Jira", "Git", "REST API"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-container">
          <h1 className="projects-heading">Projects</h1>
          <p className="projects-subtitle">Some of my recent work and research</p>
          
          {/* Swiper Carousel */}
          <div className="swiper-container">
            <Swiper
              effect={"slide"}
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={2}
              spaceBetween={30}
              initialSlide={0}
              loop={true}
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              
              modules={[Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40
                }
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Project {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
