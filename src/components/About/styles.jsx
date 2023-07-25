import styled, { keyframes, css } from "styled-components";
import { colors } from "../../themes";

export const ContainerAbout = styled.section` 
    display: flex;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    flex-direction: column;    
    padding: 2rem;
    align-items: center;
`;

export const ContainerBodyAbout = styled.body`
    margin: 2rem;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        height: 90.5vh;
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
    margin-top: 1rem;
    text-align: justify;
`;
export const PhotoProfile = styled.img`
    height: 400px;
    border-radius: 50%;
    filter: drop-shadow(0 -30px 100px ${colors.color6}); 
    /* background-color: ${colors.color3}; */
    margin: 2rem auto;
    margin-top: 0;
    @media (max-width: 768px) {
        height: 150px;
    }
`;
