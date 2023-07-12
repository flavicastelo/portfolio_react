import { ButtonGitHub, ButtonProject, ContainerButtons, ContainerCard, DescriptionCard, ImgCard, TitleCard } from "./styles";


export default function CardXp(props) {

    return (
        <ContainerCard>
            <ImgCard src={props.image} />
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.description}</DescriptionCard>
            <ContainerButtons>
                <ButtonProject target="_blank" href={props.project}>Veja aqui</ButtonProject>
                <ButtonGitHub target="_blank" href={props.github}>Código</ButtonGitHub>
            </ContainerButtons>

        </ContainerCard>
    );
}