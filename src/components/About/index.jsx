
import photoProfile from '../../assets/perfil.png';
import { ContainerAbout, ContainerBodyAbout, ContainerTextAbout, DescriptionAbout, PhotoProfile } from './styles';

export default function About(props) {
    const { darkMode } = props;
    return (
        <ContainerAbout darkMode={darkMode} id='about'>

            <ContainerBodyAbout >
                <PhotoProfile src={photoProfile} />
                <ContainerTextAbout>
                    <DescriptionAbout darkMode={darkMode}>
                        Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estagiária Full Stack Web e Mobile. Meu foco é seguir carreira em Front-End, criando interfaces intuitivas e atraentes. Com habilidades em HTML, CSS, JavaScript, React, Flutter Mobile e Node.js. Sou apaixonada pela usabilidade e pela experiência do usuário, buscando criar produtos funcionais e visualmente atraentes. Sou uma profissional proativa, organizada e colaborativa, capaz de trabalhar bem em equipe.
                    </DescriptionAbout>
                </ContainerTextAbout>

            </ContainerBodyAbout>
        </ContainerAbout>
    );
}