import { ContainerBody, ContainerHome, ContainerText, Description, ImgProfile, Name, Tag, TextTitle } from "./styles";
import profileImg from '../../assets/profileImg.png';

import useIntersectionObserver from "../../utils/animations.jsx";

export default function Home(props) {
  const { darkMode } = props;
  const { sectionRef, isVisible } = useIntersectionObserver();

  return (
    <ContainerHome darkMode={darkMode} id="home" data-index="0">
      <ContainerBody>
        <ImgProfile src={profileImg} ref={sectionRef} isVisible={isVisible} />
        <ContainerText ref={sectionRef} isVisible={isVisible}>
          <Tag>
            <b>&lt;p&gt;</b>
          </Tag>
          <TextTitle darkMode={darkMode}> Olá, me chamo</TextTitle>
          <Name>Flaviana Castelo.</Name>
          <Description darkMode={darkMode}> 
            Desenvolvedora Front-End e estudante de Análise e Desenvolvimento de Sistemas
          </Description>
          <Tag>
            <b>&lt;/p&gt;</b>
          </Tag>
        </ContainerText>
      </ContainerBody>
    </ContainerHome>
  );
}
