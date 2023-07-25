import styled, { keyframes } from "styled-components";
import { colors } from "../../themes";

//animacoes
const fadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

//estilos
export const ContainerHome = styled.section` 
    display: flex;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    flex-direction: column;    
    padding: 2rem;
    align-items: center;
    padding-right: 0;
    @media (max-width: 768px) {
        padding-right: 2rem;
    }
`;

export const ContainerBody = styled.body`
    margin: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        height: 90.5vh;
    }
`;
export const ContainerText = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${fadeInLeft} 2s ease-in-out;

`;
export const TextTitle = styled.p`
    color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-size: 24px;
`;
export const Name = styled.h1`
    color: ${colors.color6};
    font-size: 32px;
`;
export const Description = styled.p`
    color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-size: 14px;
    margin-top: 1rem;
    text-align: justify;
    
`;
export const ImgProfile = styled.img`
    height: 400px;
    border-radius: 50%;
    
    margin: 2rem auto;
    margin-top: 0;
    animation: ${fadeInRight} 2s ease-in-out;
    @media (max-width: 768px) {
        height: 150px;
    }
`;
export const Tag = styled.p`
    color: ${colors.color6};
    font-size: 24px;
`;
export const DivInLine = styled.div`
    display: flex;
    flex-direction: row;
`;


