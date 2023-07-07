import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;
export const ContainerIcons = styled.div`
    gap: 2rem;
`;
export const ContainerOpen= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;
export const ContentButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6px;
    width: 25vw;
    justify-content: space-between;
    align-items: start;
    position: absolute; 
    top: 10%; 
    
`;
export const ButtonMenu = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.color5};
    padding: 0.5rem;
    top: 2rem;
    font-size: 12px;
`;
export const ButtonCurriculum = styled.a`
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.color6};
    padding: 0.5rem;
    font-size: 12px;
`;
export const LinkIcon = styled.a`
    text-decoration: none;
    color: ${colors.color5};
`;