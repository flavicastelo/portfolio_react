import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    padding: 0.5rem;
    background-color: ${colors.color3}; 
    position: fixed;
    border-radius: 20px;
    top: 25vh;
    right: 4vw;
    z-index: 2;
    width: 80px;
    height: 50vh;
    
`;
export const ContainerIcons = styled.div`
    flex-direction: column;
    height: 50vh;
    position: relative;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonOpen = styled.button`
     background-color: ${(props) => props.clicked ? '#00a2dd': 'transparent'};
    border: none;
    outline: 0;
    cursor: pointer;
    border-radius: 5px;
    height: 1.5em;
    &:hover{
        background-color: #00a2dd;
    } 
`;
