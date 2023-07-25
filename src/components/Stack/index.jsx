import { ContainerBodyStack, ContainerIconsStack, ContainerStack, ContainerText, DescriptionStack, ImgStack, ImgStackQ, TextTitleStack } from "./styles";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import flutter from '../../assets/flutter.png';
import styledcomponents from '../../assets/styledComponents.png';

export default function Stack(props) {
    const { darkMode } = props;
    return (
        <ContainerStack darkMode={darkMode} id="stack">
            <ContainerBodyStack>
                <ContainerText>
                    <TextTitleStack>
                        Tecnologias
                    </TextTitleStack>
                    <DescriptionStack darkMode={darkMode}>
                        Essas são algumas das tecnologias com as quais estou familiarizada e confortável em trabalhar. Estou sempre aprendendo e atualizando minhas habilidades para acompanhar as tendências e avanços da indústria de tecnologia.
                    </DescriptionStack>
                </ContainerText>

                <ContainerIconsStack>
                    <ImgStack src={html} />
                    <ImgStack src={css} />
                    <ImgStackQ src={js} />
                    <ImgStackQ src={nodejs} />
                    <ImgStackQ src={react} />
                    <ImgStack src={flutter} />
                    <ImgStack src={styledcomponents} />
                </ContainerIconsStack>
            </ContainerBodyStack>

        </ContainerStack>


    );
}