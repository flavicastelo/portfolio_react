
import photoProfile from '../../assets/perfil2.png';
import { ContainerAbout, ContainerBodyAbout, ContainerTextAbout, DescriptionAbout, PhotoProfile } from './styles';
import useIntersectionObserver from "../../utils/animations.jsx";

export default function About(props) {
    const { darkMode } = props;
    const { sectionRef, isVisible } = useIntersectionObserver();
  
    return (
        <ContainerAbout darkMode={darkMode} id='about' data-index="1">

            <ContainerBodyAbout >
                <PhotoProfile src={photoProfile} ref={sectionRef} isVisible={isVisible} />
                <ContainerTextAbout>
                    <DescriptionAbout darkMode={darkMode} ref={sectionRef} isVisible={isVisible}>
                        Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estagiária Full Stack Web e Mobile. Meu foco é seguir carreira em Front-End, criando interfaces intuitivas e atraentes. Com habilidades em HTML, CSS, JavaScript, React, Flutter Mobile e Node.js. Sou apaixonada pela usabilidade e pela experiência do usuário, buscando criar produtos funcionais e visualmente atraentes. Sou uma profissional proativa, organizada e colaborativa, capaz de trabalhar bem em equipe.
                    </DescriptionAbout>
                </ContainerTextAbout>

            </ContainerBodyAbout>
        </ContainerAbout>
    );
}