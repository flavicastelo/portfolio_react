import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerContact = styled.section`
    display: flex;
    background-color: ${colors.color2};
    justify-content: center;
    align-items: center;
    padding: 3rem;
    height: 100vh;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
        padding-top: 3rem;
    }
`;

export const ContainerBodyContact = styled.body`
    margin: 2rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 80%;
`;
export const ContainerTextContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerIconsContact = styled.div`
    display: flex;
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
export const LinkContact = styled.a`
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`;
export const TitleContact = styled.p`
    color: ${colors.color6};
    font-size: 32px;
    margin-bottom: 1rem;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const DescriptionContact = styled.p`
    
`;
