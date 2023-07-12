import { ContainerBody, ContainerHome, ContainerText, Description, ImgProfile, Name, Tag, TextTitle } from "./styles";
import profileImg from '../../assets/profileImg.png';

export default function Home(props) {
  const { darkMode } = props;

  return (
    <ContainerHome darkMode={darkMode} id="home">
      <ContainerBody>
        <ImgProfile src={profileImg} />
        <ContainerText>
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
