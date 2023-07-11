import { ContainerIcons, CurriculoBtn, ItemMenu, TextMenu, LinkCurriculo } from "./styles";


export default function NavBar(props) {
    return (

        <ContainerIcons>
            <ItemMenu clicked={props.isHome} >
                <TextMenu >Sobre</TextMenu>
            </ItemMenu>
            <ItemMenu clicked={props.isExp}>
                <TextMenu >Experiências</TextMenu>
            </ItemMenu>
            <ItemMenu clicked={props.isContact}>
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