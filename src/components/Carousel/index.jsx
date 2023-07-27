import React from 'react';
import Slider from 'react-slick';
import CardXp from '../CardXp';

export default function Carousel({ darkMode, projects }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {projects.map((project, index) => (
        <CardXp
          key={index}
          darkMode={darkMode}
          image={project.image}
          title={project.title}
          description={project.description}
          github={project.github}
          project={project.project}
          stack={project.stack}
        />
      ))}
    </Slider>
  );
}
