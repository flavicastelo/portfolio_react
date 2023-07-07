import { useNavigate } from "react-router-dom";
import { ContainerMenu, ContentButton, ButtonMenu, ButtonCurriculum, ContainerIcons, ContainerOpen, LinkIcon } from "./styles";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from "../../themes";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MenuHamburger({ showMenu, toggleMenu }) {
    const navigate = useNavigate();

    const handleOpen = () => {
        toggleMenu();
    };

    return (
        <ContainerMenu>
            <ContainerOpen>
                <IconButton showMenu={showMenu} onClick={handleOpen} style={{ padding: 0, margin: 0 }}>
                    <MenuIcon style={{ color: colors.color6, fontSize: 35 }} />
                </IconButton>
                {showMenu && <ContentButton>
                    <ButtonMenu onClick={() => navigate("/")}>Sobre</ButtonMenu>
                    <ButtonMenu onClick={() => navigate("/experience")}>Experiências</ButtonMenu>
                    <ButtonMenu onClick={() => navigate("/contact")}>Contato</ButtonMenu>
                    <ButtonCurriculum target="_blank" href="https://curriculo-flaviana.vercel.app/">Currículo</ButtonCurriculum>
                </ContentButton>}
            </ContainerOpen>

            <ContainerIcons>
                <IconButton>
                    <LinkIcon target="_blank" href="https://curriculo-flaviana.vercel.app/">
                        <AttachFileIcon />
                    </LinkIcon>
                </IconButton>
                <IconButton>
                    <LinkIcon>
                        <GitHubIcon  target="_blank" href="https://github.com/flavicastelo"/>
                    </LinkIcon>

                </IconButton>
            </ContainerIcons>
        </ContainerMenu>



    );
}