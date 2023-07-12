import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => (props.showMenu ? colors.color3 : 'transparent')};
    position: fixed;
    border-radius:  ${(props) => (props.showMenu ? '20px' : '50%')};
    top: 25vh;
    right: 4vw;
    z-index: 2;
    width: ${(props) => (props.showMenu ? '80px' : '80px')};
    height: ${(props) => (props.showMenu ? '50vh' : '80px')};
    transition: width 0.3s, height 0.3s;
    
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
    position: relative;
    background-color: ${colors.color6};
    border: none;
    outline: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 100%;
    height: 100%;
 
`;

export const ButtonClose = styled.button`
    border: none;
    outline: 0;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${colors.color6};
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -5px;
`;
