import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerStack = styled.section`
    display: flex;
    align-items: top;
    background-color: ${colors.color2};
    padding: 3rem;
    gap: 8rem;
    height: 100vh;
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
        padding-top: 3rem;
        gap: 0;
    }
`;
export const ContainerIconsStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
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
    @media (max-width: 768px) {
        width: 75px;
    }
`;
export const ImgStackQ = styled.img`
    margin-top: 0;
    width: 87px;
    height: 87px;
    @media (max-width: 768px) {
        width: 87px;
        height: 87px;
    }
`;
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
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
    color: ${colors.color5};
    font-size: 14px;
    text-align: justify;
   
`;
