import CardXp from "../CardXp";
import games from '../../assets/games.png';
import cookies from '../../assets/cookie.png';
import { ButtonProjects, ContainerCards, ContainerExperience, ContainerTextXp, DescriptionXp, TextTitleXp } from "./styles";


export default function Experience() {
    const title1 = 'Frontend API de Jogos';
    const desc1 = 'Frontend feito para listar jogos, desenvolvido com ReactJs e Styled Components';
    const github1= 'https://github.com/flavicastelo/projeto_front_end_game';
    const project1 = 'https://projeto-front-end-game.vercel.app/';
    const title2= 'Cookie Game';
    const desc2 = 'Jogo onde o personagem pula obstáculos, desenvolvido com HTML, Javascript e CSS';
    const github2 = 'https://github.com/flavicastelo/cookiegame';
    const project2 = 'https://vercel.com/flavicastelo/cookiegame';
    const title3 = 'TubeYou';
    const desc3 = 'CRUD de cadastro de videos, desenvolvido com Reactjs, MongoDB, NodeJs e Styled Components';
    const github3 = 'https://github.com/flavicastelo/TubeYou';
    
    return (
        <ContainerExperience id="experience">
            <ContainerTextXp>
                <TextTitleXp>
                    Projetos
                </TextTitleXp>
                <DescriptionXp>
                    Esses são apenas alguns exemplos dos projetos em que tenho trabalhado recentemente. Estou sempre buscando novos desafios e oportunidades para expandir minha experiência e conhecimento.
                </DescriptionXp>
                <ButtonProjects target="_blank" href="https://github.com/flavicastelo?tab=repositories">Ver Todos</ButtonProjects>
            </ContainerTextXp>
            <ContainerCards>
                <CardXp image={games} title={title1} description={desc1} github={github1} project={project1}/>
                <CardXp image={cookies} title={title2} description={desc2} github={github2} project={project2} />
                <CardXp image={games} title={title3} description={desc3} github={github3} />
            </ContainerCards>
        </ContainerExperience>
    );
}