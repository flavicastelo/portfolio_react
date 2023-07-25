import CardXp from "../CardXp";
import games from '../../assets/games.png';
import cookies from '../../assets/cookie.png';
import { ButtonProjects, ContainerCards, ContainerExperience, ContainerTextXp, DescriptionXp, TextTitleXp } from "./styles";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import flutter from '../../assets/flutter.png';
import styledcomponents from '../../assets/styledComponents.png';

export default function Experience(props) {
    const { darkMode } = props;
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
        <ContainerExperience darkMode={darkMode} id="experience">
            <ContainerTextXp>
                <TextTitleXp>
                    Projetos
                </TextTitleXp>
                <DescriptionXp darkMode={darkMode}>
                    Esses são apenas alguns exemplos dos projetos em que tenho trabalhado recentemente. Estou sempre buscando novos desafios e oportunidades para expandir minha experiência e conhecimento.
                </DescriptionXp>
                <ButtonProjects target="_blank" href="https://github.com/flavicastelo?tab=repositories">Ver Todos</ButtonProjects>
            </ContainerTextXp>
            <ContainerCards>
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
        </ContainerExperience>
    );
}