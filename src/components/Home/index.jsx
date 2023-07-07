import { useMediaQuery } from 'react-responsive';
import NavBar from "../NavBar";
import { ContainerBody, ContainerHome, ContainerText, Description, DivInLine, ImgProfile, Name, Tag, TextTitle } from "./styles";
import profileImg from '../../assets/profileImg.png';
import MenuHamburger from '../MenuHamburger';
import { useState } from 'react';
export default function Home() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

    return (

        <ContainerHome>
            {isMobile ? <MenuHamburger showMenu={showMenu} toggleMenu={toggleMenu} /> : <NavBar isHome={true} />}
            <ContainerBody >
                <ImgProfile src={profileImg} />
                <ContainerText>
{/* <DivInLine> */}
<Tag><b>&lt;p&gt;</b></Tag><TextTitle> Olá, me chamo</TextTitle>
                {/* </DivInLine> */}
                <Name>
                    Flaviana Castelo.
                </Name>
                <Description>
                    Desenvolvedora Front-End e estudante de Análise e Desenvolvimento de Sistemas
                    {/* Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estagiária Full Stack Web e Mobile. Meu foco é seguir carreira em Front-End, criando interfaces intuitivas e atraentes. Com habilidades em HTML, CSS, JavaScript, React, Flutter Mobile e Node.js. Sou apaixonada pela usabilidade e pela experiência do usuário, buscando criar produtos funcionais e visualmente atraentes. Sou uma profissional proativa, organizada e colaborativa, capaz de trabalhar bem em equipe.  */}
                </Description>
                <Tag><b>&lt;/p&gt;</b>
                </Tag>
                </ContainerText>
                
            </ContainerBody>
        </ContainerHome>
    );
}