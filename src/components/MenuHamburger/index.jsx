import { ContainerMenu, ContainerIcons,  } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
import Face2Icon from '@mui/icons-material/Face2';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from "react-scroll";

export default function MenuHamburger(props) {
  const { darkMode, toggleDarkMode } = props;

  return (
    <ContainerMenu darkMode={darkMode}>
      <ContainerIcons>
        <Link
          to="home"
          activeClass='active'
          smooth={true}
          spy={true}
          style={{ cursor: 'pointer' }}
        >
          <HomeIcon style={{ color: '#DA5866' }} />
        </Link>
        <Link
          to="about"
          activeClass='active'
          smooth={true}
          spy={true}
          style={{ cursor: 'pointer' }}
        >
          <Face2Icon style={{ color: '#DA5866' }} />
        </Link>
        <Link
          to="stack"
          activeClass='active'
          smooth={true}
          spy={true}
          style={{ cursor: 'pointer' }}
        >
          <CodeIcon style={{ color: '#DA5866' }} />
        </Link>
        <Link
          to="experience"
          activeClass='active'
          smooth={true}
          spy={true}
          style={{ cursor: 'pointer' }}
        >
          <WorkIcon style={{ color: '#DA5866' }} />
        </Link>
        <Link
          to="contact"
          activeClass='active'
          smooth={true}
          spy={true}
          style={{ cursor: 'pointer' }}
        >
          <AlternateEmailIcon style={{ color: '#DA5866' }} />
        </Link>
        {darkMode ? (
          <WbSunnyIcon
            style={{ color: '#DA5866', cursor: 'pointer' }}
            onClick={toggleDarkMode}
          />
        ) : (
          <DarkModeIcon
            style={{ color: 'black', cursor: 'pointer' }}
            onClick={toggleDarkMode}
          />
        )}
      </ContainerIcons>
    </ContainerMenu>
  );
}
