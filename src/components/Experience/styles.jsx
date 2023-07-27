import styled, {keyframes, css} from 'styled-components';
import { colors } from "../../themes";

const fadeInTop = keyframes`
    from {
        opacity: 0;
        transform: translatey(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


export const ContainerExperience = styled.section` 
    display: flex;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    padding: 3rem;
    padding-top: 5rem;
    height: 100vh;
    gap: 1rem;
`;
export const ContainerTextXp = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: start;
    @media (min-width: 769px) {
        ${({ isVisible }) =>
            isVisible &&
            css`
                animation: ${fadeInTop} 2s ease-in-out;
            `}
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DescriptionXp = styled.p`
     color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-size: 14px;
    text-align: justify;
    margin-bottom: 1rem;
`;
export const ContainerCards = styled.div`
    display: flex;   
    flex-direction: row;
    gap: 1rem;
    padding: 0 10rem;
    align-items: center;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
`;

export const ButtonProjects = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${props => (props.darkMode ? colors.bgLightMode : colors.bgColor)};
    width: 80px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    color: ${props => (props.darkMode ? colors.bgColor : colors.color2)};
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    &:hover {
        background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
        border: 1px solid ${colors.color6};
        color:  ${colors.color6};
    }
`;
export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
`;

export const BtnSlider = styled.button`
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
