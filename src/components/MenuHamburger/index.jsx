import { ContainerMenu, ContentButton, ButtonMenu, ButtonCurriculum, ContainerIcons, ContainerOpen, LinkIcon } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
import Face2Icon from '@mui/icons-material/Face2';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from "react-scroll";

export default function MenuHamburger() {

    return (
        <ContainerMenu>
            <ContainerIcons>
                <Link
                    to="home"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <HomeIcon style={{color: '#DA5866'}}/>
                </Link>
                <Link to="about"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <Face2Icon style={{color: '#DA5866'}} />
                </Link>
                <Link to="stack"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <CodeIcon style={{color: '#DA5866'}}/>
                </Link>
                <Link to="experience"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <WorkIcon style={{color: '#DA5866'}}/>
                </Link>
                <Link to="contact"
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer' }}
                >
                    <AlternateEmailIcon style={{color: '#DA5866'}}/>
                </Link>

              
            </ContainerIcons>
        </ContainerMenu>



    );
}