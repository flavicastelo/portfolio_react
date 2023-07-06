import { useNavigate } from "react-router-dom";
import { ContainerIcons, CurriculoBtn, ItemMenu, TextMenu, LinkCurriculo } from "./styles";


export default function NavBar(props) {
    const navigate = useNavigate();
    return (

        <ContainerIcons>
            <ItemMenu clicked={props.isHome} onClick={() => navigate("/")} >
                <TextMenu >Sobre</TextMenu>
            </ItemMenu>
            <ItemMenu clicked={props.isExp} onClick={() => navigate("/experience")}>
                <TextMenu >Experiências</TextMenu>
            </ItemMenu>
            <ItemMenu clicked={props.isContact} onClick={() => navigate("/contact")}>
                <TextMenu  >Contato</TextMenu>
            </ItemMenu>
            <CurriculoBtn>
                <LinkCurriculo clicked={props.isResume} target="_blank" href="https://curriculo-flaviana.vercel.app/">
                    <TextMenu >Currículo</TextMenu>
                </LinkCurriculo>
            </CurriculoBtn>
        </ContainerIcons>


    );
}