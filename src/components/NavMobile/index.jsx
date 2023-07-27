import { Container, Navigation, Ul, Li, A, Indicator, Text, Icon, } from "./styles";
import React, { useRef, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Face2Icon from '@mui/icons-material/Face2';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from "react-scroll";
import { useEffect } from "react";

export default function NavBottom(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const listRef = useRef();
    const { darkMode } = props;

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section[data-index]');
          let index = -1; // Inicializamos como -1 para indicar que nenhum ícone está ativo
    
          sections.forEach((section, idx) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
              index = idx; // Definimos o índice para o valor encontrado
            }
          });
    
          setActiveIndex(index);
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <Container>
            <Navigation darkMode={darkMode}>
                <Ul ref={listRef}>
                    <Li className={activeIndex === 0 ? 'active' : ''} >
                        <Link
                            to="home"
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            style={{ cursor: 'pointer' }}
                        >
                            <A>
                                <Icon>
                                    <HomeIcon />
                                </Icon>
                                <Text>Início</Text>
                            </A>
                        </Link>
                    </Li>

                    <Li className={activeIndex === 1 ? 'active' : ''} >
                    <Link
                            to="about"
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            style={{ cursor: 'pointer' }}
                        >
                        <A>
                            <Icon>
                                <Face2Icon />
                            </Icon>
                            <Text>Sobre</Text>
                        </A>
                        </Link>
                    </Li>
                    <Li className={activeIndex === 2 ? 'active' : ''} >
                    <Link
                            to="stack"
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            style={{ cursor: 'pointer' }}
                        >
                        <A>
                            <Icon>
                                <CodeIcon />
                            </Icon>
                            <Text>Tecnologias</Text>
                        </A>
                        </Link>
                    </Li>
                    <Li className={activeIndex === 3 ? 'active' : ''} >
                    <Link
                            to="experience"
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            style={{ cursor: 'pointer' }}
                        >
                        <A>
                            <Icon>
                                <WorkIcon />
                            </Icon>
                            <Text>Projetos</Text>
                        </A>
                        </Link>
                    </Li>
                    <Li className={activeIndex === 4 ? 'active' : ''} >
                    <Link
                            to="contact"
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            style={{ cursor: 'pointer' }}
                        >
                        <A>
                            <Icon>
                                <AlternateEmailIcon />
                            </Icon>
                            <Text>Contato</Text>
                        </A>
                        </Link>
                    </Li>
                    <Indicator />

                </Ul>
            </Navigation>
        </Container>
    );
}
