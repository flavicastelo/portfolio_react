import { useNavigate } from "react-router-dom";
import { ContainerIcons, CurriculoBtn, ItemMenu, TextMenu, LinkCurriculo } from "./styles";


export default function NavBar(props) {
    const navigate = useNavigate();
    return (

        <ContainerIcons>
            <ItemMenu onClick={() => navigate("/")} >
                <TextMenu clicked={props.isHome}>Sobre</TextMenu>
            </ItemMenu>
            <ItemMenu onClick={() => navigate("/experience")}>
                <TextMenu clicked={props.isExp}>Experiências</TextMenu>
            </ItemMenu>
            <ItemMenu onClick={() => navigate("/contact")}>
                <TextMenu clicked={props.isContact} >Contato</TextMenu>
            </ItemMenu>
            <CurriculoBtn>
                <LinkCurriculo target="_blank" href="https://curriculo-flaviana.vercel.app/">
                    <TextMenu clicked={props.isResume}>Currículo</TextMenu>
                </LinkCurriculo>
            </CurriculoBtn>
        </ContainerIcons>


    );
}