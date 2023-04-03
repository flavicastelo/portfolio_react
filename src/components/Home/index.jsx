

import NavBar from "../NavBar";
import { ContainerBody, ContainerHome, Description, Name, TextTitle } from "./styles";

export default function Home() {

    return (
        <ContainerHome>
            <NavBar isHome={true} />
            <ContainerBody >
                <TextTitle>Olá, me chamo</TextTitle>
                
                <Name>
                    Flaviana Castelo.
                </Name>
                <Description>
                    Sou estudante de Análise e Desenvolvimento de Sistemas <br />e Desenvolvedora Front-end.
                </Description>
            </ContainerBody>
        </ContainerHome>
    );
}