import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerExperience = styled.section` 
    display: flex;
    background-color: ${colors.color2};
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    padding: 3rem;
    height: auto;
    gap: 1rem;
`;
export const ContainerTextXp = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: start;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const TextTitleXp = styled.p`
    color: ${colors.color6};
    font-size: 32px;
    margin-bottom: 0.5rem;
`;
export const DescriptionXp = styled.p`
    color: ${colors.color5};
    font-size: 14px;
    text-align: justify;
    margin-bottom: 1rem;
`;
export const ContainerCards = styled.div`
    display: flex;   
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ButtonProjects = styled.a`
    text-decoration: none;
    background-color: ${colors.color6};
    width: auto;
    padding: 5px;
    border-radius: 5px;
    color: ${colors.color2};
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    &:hover {
        background-color: ${colors.color3};
        color:  ${colors.color6};
    }
`;