import { ButtonGitHub, ButtonProject, ContainerButtons, ContainerCard, DescriptionCard, ImgCard, TitleCard, IconStack, ContainerStack, TagStack, TextStack, LineStack } from "./styles";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function CardXp(props) {
    const { darkMode, image, description, stack } = props;
    return (
        <ContainerCard darkMode={darkMode}>
            <ImgCard src={image} />

            <TitleCard>{props.title}</TitleCard>
            {/* <LineStack /> */}
            <DescriptionCard>{description}</DescriptionCard>

            <ContainerStack>
                {stack.map((tech, index) => (
                    <TagStack key={index}>
                        <IconStack src={tech.src} />
                        <TextStack>{tech.text}</TextStack>
                    </TagStack>
                ))}
            </ContainerStack>
            <ContainerButtons>
                <ButtonProject darkMode={darkMode} target="_blank" href={props.project}>Veja aqui <OpenInNewIcon style={{ color: '#FFF', fontSize: '14px' }} /></ButtonProject>
                {/* <ButtonGitHub darkMode={darkMode} target="_blank" href={props.github}>Código</ButtonGitHub> */}
            </ContainerButtons>

        </ContainerCard>
    );
}
