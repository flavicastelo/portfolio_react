import { ContainerBodyStack, ContainerIconsStack, ContainerStack, ContainerText, DescriptionStack, ImgStack, ImgStackQ, TextTitleStack } from "./styles";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import flutter from '../../assets/flutter.png';
import styledcomponents from '../../assets/styledComponents.png';
import git from '../../assets/git.png';
import useIntersectionObserver from "../../utils/animations.jsx";
import Title from "../Title.jsx";


export default function Stack(props) {
    const { darkMode } = props;
    const { sectionRef, isVisible } = useIntersectionObserver();

    return (
        <ContainerStack darkMode={darkMode} id="stack" data-index="2">
            <ContainerBodyStack>
                <ContainerText  ref={sectionRef} isVisible={isVisible} >
                <Title darkMode={darkMode} titleContent="Tecnologias" />
                    <DescriptionStack darkMode={darkMode}>
                        Essas são algumas das tecnologias com as quais estou familiarizada e confortável em trabalhar. Estou sempre aprendendo e atualizando minhas habilidades para acompanhar as tendências e avanços da indústria de tecnologia.
                    </DescriptionStack>
                </ContainerText>

                <ContainerIconsStack>
                    <ImgStack src={html} ref={sectionRef} isVisible={isVisible}/>
                    <ImgStack src={css} ref={sectionRef} isVisible={isVisible} />
                    <ImgStackQ src={js} ref={sectionRef} isVisible={isVisible} />
                    <ImgStackQ src={nodejs} ref={sectionRef} isVisible={isVisible} />
                    <ImgStackQ src={react} ref={sectionRef} isVisible={isVisible} />
                    <ImgStack src={flutter} ref={sectionRef} isVisible={isVisible} />
                    <ImgStackQ src={styledcomponents} ref={sectionRef} isVisible={isVisible} />
                    <ImgStackQ src={git} ref={sectionRef} isVisible={isVisible} />
                </ContainerIconsStack>
            </ContainerBodyStack>

        </ContainerStack>


    );
}