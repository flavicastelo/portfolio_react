import { ContainerMenu, ContainerIcons, TitleNavBar, MenuItens, ContainerItens, ProgressBarBackground, LinkContact } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-scroll";
import { useState, useEffect } from 'react';
import ButtonDarkMode from "../ButtonDakMode";

export default function NavBar(props) {

    const { darkMode, toggleDarkMode } = props;
    const [scrollProgress, setScrollProgress] = useState(0);
   
    useEffect(() => {
        const updateScrollProgress = () => {
            const body = document.body;
            const scrollPos = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
            setScrollProgress(scrollPos);
        };

       
        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);


    return (
        <ContainerMenu darkMode={darkMode}>
            <Link
                to="home"
                activeClass='active'
                smooth={true}
                spy={true}
                style={{ cursor: 'pointer' }}
            >
                <TitleNavBar>FlaviCastelo</TitleNavBar>
            </Link>

            <ContainerItens>

                <Link to="about"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <MenuItens darkMode={darkMode}>Sobre</MenuItens>
                </Link>
                <Link to="stack"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <MenuItens darkMode={darkMode}>Tecnologias</MenuItens>
                </Link>
                <Link to="experience"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <MenuItens darkMode={darkMode}>Projetos</MenuItens>
                </Link>
                <Link to="contact"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <MenuItens darkMode={darkMode} >Contatos</MenuItens>
                </Link>

            </ContainerItens>
          <ButtonDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ContainerIcons>
                <LinkContact target='_blank' href='https://github.com/flavicastelo'>
                    <GitHubIcon style={{ color: '#01d0c0', fontSize: '24px' }} />
                </LinkContact>
                <LinkContact target='_blank' href="https://www.linkedin.com/in/flavianacastelo/">
                    <LinkedInIcon style={{ color: '#01d0c0', fontSize: '26px' }} />
                </LinkContact>
            </ContainerIcons>
            <ProgressBarBackground style={{ width: `${scrollProgress}%` }} />
        </ContainerMenu>
    );

}