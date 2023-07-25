import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerStack = styled.section`
    display: flex;
    align-items: top;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    padding: 3rem;
    gap: 1rem;
    height: 100vh;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
        padding-top: 3rem;
        gap: 0;
    }
`;
export const ContainerBodyStack = styled.body`
    margin: 2rem;
    height: 100%;
    display: flex;
    align-items: start;
    width: 80%;
    gap: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        height: 90.5vh;
        width: 100%;
        gap: 0;
    }
`;
export const ContainerIconsStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 0.5rem;
    gap: 5rem;
    width: 50%;
     @media (max-width: 768px) {
        margin-top: 2rem;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content:space-evenly;
        gap: 1rem;
        width: 100%;
    } 
`;
export const ImgStack = styled.img`
    margin-top: 0;
    width: 75px;
    height: 100px;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 768px) {
        width: 75px;
    }
    &:hover {
        transform: scale(1.1); 
    }
`;
export const ImgStackQ = styled.img`
    margin-top: 0;
    width: 87px;
    height: 87px;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 768px) {
        width: 87px;
        height: 87px;
    }
    &:hover {
        transform: scale(1.1); 
    }
`;
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const TextTitleStack = styled.p`
    color: ${colors.color6};
    font-size: 32px;
    margin-bottom: 1rem;
`;
export const DescriptionStack = styled.p`
    color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-size: 14px;
    text-align: justify;
   
`;
