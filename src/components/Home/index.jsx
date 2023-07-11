import { ContainerBody, ContainerHome, ContainerText, Description, ImgProfile, Name, Tag, TextTitle } from "./styles";
import profileImg from '../../assets/profileImg.png';

export default function Home() {

    return (
        <ContainerHome id="home">
           
            <ContainerBody >
                <ImgProfile src={profileImg} />
                <ContainerText>
{/* <DivInLine> */}
<Tag><b>&lt;p&gt;</b></Tag><TextTitle> Olá, me chamo</TextTitle>
                {/* </DivInLine> */}
                <Name>
                    Flaviana Castelo.
                </Name>
                <Description>
                    Desenvolvedora Front-End e estudante de Análise e Desenvolvimento de Sistemas
                    {/* Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estagiária Full Stack Web e Mobile. Meu foco é seguir carreira em Front-End, criando interfaces intuitivas e atraentes. Com habilidades em HTML, CSS, JavaScript, React, Flutter Mobile e Node.js. Sou apaixonada pela usabilidade e pela experiência do usuário, buscando criar produtos funcionais e visualmente atraentes. Sou uma profissional proativa, organizada e colaborativa, capaz de trabalhar bem em equipe.  */}
                </Description>
                <Tag><b>&lt;/p&gt;</b>
                </Tag>
                </ContainerText>
                
            </ContainerBody>
        </ContainerHome>
    );
}