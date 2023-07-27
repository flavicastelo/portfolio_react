import CardXp from "../CardXp";
import games from '../../assets/games.png';
import cookies from '../../assets/cookie.png';
import { BtnSlider, ButtonProjects, ContainerBtn, ContainerCards, ContainerExperience, ContainerTextXp, DescriptionXp } from "./styles";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import styledcomponents from '../../assets/styledComponents.png';
import useIntersectionObserver from "../../utils/animations.jsx";
import Title from "../Title.jsx";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Experience(props) {
    const { darkMode } = props;
    const { sectionRef, isVisible } = useIntersectionObserver();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
    };
    const projects = [
        {
            image: games,
            title: 'Frontend API de Jogos',
            description: 'Galeria de jogos.',
            github: 'https://github.com/flavicastelo/projeto_front_end_game',
            project: 'https://projeto-front-end-game.vercel.app/',
            stack: [
                { src: react, text: 'React' },
                { src: styledcomponents, text: 'Styled Components' },
            ],
        },
        {
            image: cookies,
            title: 'Cookie Game',
            description: 'Jogo onde o personagem pula obstáculos.',
            github: 'https://github.com/flavicastelo/cookiegame',
            project: 'https://vercel.com/flavicastelo/cookiegame',
            stack: [
                { src: html, text: 'HTML' },
                { src: css, text: 'CSS' },
                { src: js, text: 'Javascript' },
            ],
        },
        {
            image: games,
            title: 'TubeYou',
            description: 'Site baseado no Youtube, para cadastro de vídeos.',
            github: 'https://github.com/flavicastelo/TubeYou',
            stack: [
                { src: react, text: 'React' },
                { src: nodejs, text: 'NodeJs' },
                { src: styledcomponents, text: 'Styled Components' },
            ],
        },
    ];


    return (
        <ContainerExperience darkMode={darkMode} id="experience" data-index="3">
            <ContainerTextXp  ref={sectionRef} isVisible={isVisible}>
            <Title darkMode={darkMode} titleContent="Projetos" />
                <DescriptionXp darkMode={darkMode}>
                    Esses são apenas alguns exemplos dos projetos em que tenho trabalhado recentemente. Estou sempre buscando novos desafios e oportunidades para expandir minha experiência e conhecimento.
                </DescriptionXp>
                <ButtonProjects darkMode={darkMode} target="_blank" href="https://github.com/flavicastelo?tab=repositories">Ver Todos</ButtonProjects>
            </ContainerTextXp>
            {isMobile ? (
                  <div>
                  <CardXp
                    darkMode={darkMode}
                    image={projects[currentSlide].image}
                    title={projects[currentSlide].title}
                    description={projects[currentSlide].description}
                    github={projects[currentSlide].github}
                    project={projects[currentSlide].project}
                    stack={projects[currentSlide].stack}
                  />
                  <ContainerBtn>
                    <BtnSlider onClick={handlePrevSlide}><NavigateBeforeIcon /></BtnSlider>
                    <BtnSlider onClick={handleNextSlide}><NavigateNextIcon /></BtnSlider>
                  </ContainerBtn>
                </div>
        // <Slider slidesToShow={1} slidesToScroll={1} dots={true}>
        //   {projects.map((project, index) => (
        //     <CardXp
        //       key={index}
        //       darkMode={darkMode}
        //       image={project.image}
        //       title={project.title}
        //       description={project.description}
        //       github={project.github}
        //       project={project.project}
        //       stack={project.stack}
        //     />
        //   ))}
        // </Slider>
      ) : (
        // Se não estiver em modo mobile, renderize os cards normalmente
        <ContainerCards ref={sectionRef} isVisible={isVisible}>
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
        </ContainerCards>
      )}
        </ContainerExperience>
    );
}