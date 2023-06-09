import styled, { keyframes, css } from "styled-components";
import { colors } from "../../themes";

export const ContainerAbout = styled.section` 
    display: flex;
    background-color: ${colors.color2};
    flex-direction: column;    
    padding: 2rem;
    
`;

export const ContainerBodyAbout = styled.body`
    margin: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        height: 90.5vh;
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
    color: ${colors.color5};
    font-size: 14px;
    margin-top: 1rem;
    text-align: justify;
`;
export const PhotoProfile = styled.img`
    height: 400px;
    border-radius: 50%;
    /* background-color: ${colors.color3}; */
    margin: 2rem auto;
    margin-top: 0;
    @media (max-width: 768px) {
        height: 150px;
    }
`;
