import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    padding: 0.5rem;
    background-color: ${colors.color3}; 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
`;
export const ContainerIcons = styled.div`
    flex-direction: row;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    gap: 0.5rem;
`;
export const ButtonMenu = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.color5};
    top: 2rem;
    font-size: 12px;
`;
export const ButtonCurriculum = styled.a`
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.color6};
    font-size: 12px;
`;
export const LinkIcon = styled.a`
    text-decoration: none;
    color: ${colors.color5};
    
`;