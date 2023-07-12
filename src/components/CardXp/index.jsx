import { ButtonGitHub, ButtonProject, ContainerButtons, ContainerCard, DescriptionCard, ImgCard, TitleCard } from "./styles";


export default function CardXp(props) {
    const { darkMode } = props;
    return (
        <ContainerCard darkMode={darkMode}>
            <ImgCard src={props.image} />
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.description}</DescriptionCard>
            <ContainerButtons>
                <ButtonProject darkMode={darkMode} target="_blank" href={props.project}>Veja aqui</ButtonProject>
                <ButtonGitHub darkMode={darkMode} target="_blank" href={props.github}>Código</ButtonGitHub>
            </ContainerButtons>

        </ContainerCard>
    );
}