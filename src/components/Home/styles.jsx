import styled, { keyframes, css } from "styled-components";
import { colors } from "../../themes";

export const ContainerHome = styled.div` 
    display: flex;
    background-color: ${colors.color2};
    flex-direction: column;    
    padding: 2rem;
    
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

`;
export const TextTitle = styled.p`
    color: ${colors.color5};
    font-size: 24px;
`;
export const Name = styled.h1`
    color: ${colors.color6};
    font-size: 32px;
`;
export const Description = styled.p`
    color: ${colors.color5};
    font-size: 14px;
    margin-top: 1rem;
    text-align: justify;
`;
export const ImgProfile = styled.img`
    height: 400px;
    border-radius: 50%;
    /* background-color: ${colors.color3}; */
    margin: 2rem auto;
    margin-top: 0;
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
