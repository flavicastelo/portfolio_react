import styled, { keyframes, css } from "styled-components";
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


export const ContainerAbout = styled.section` 
    display: flex;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    flex-direction: column;    
    padding: 2rem;
    align-items: center;
    padding-top: 8rem;
`;

export const ContainerBodyAbout = styled.body`
    margin: 2rem;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        height: 80vh;
        width: 100%;
    }
`;
export const ContainerTextAbout = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
   
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DescriptionAbout = styled.p`
   color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-size: 14px;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 2px;
    @media (min-width: 769px) {
        ${({ isVisible }) =>
            isVisible &&
            css`
                animation: ${fadeInRight} 2s ease-in-out;
            `}
    }
`;
export const PhotoProfile = styled.img`
    height: 300px;
    align-self: center;
    filter: drop-shadow(0 -10px 50px ${colors.color6}); 
    margin: 0 auto;
    @media (min-width: 769px) {
        ${({ isVisible }) =>
            isVisible &&
            css`
                animation: ${fadeInLeft} 2s ease-in-out;
            `}
    }
    @media (max-width: 768px) {
        height: 150px;
    }
`;
