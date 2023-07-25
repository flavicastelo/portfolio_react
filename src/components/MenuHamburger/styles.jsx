import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    padding: 0.5rem;
    /* background-color: ${props => (props.darkMode ? colors.bgColor : colors.color3)}; */
     background-color: ${props => (props.darkMode ? '#0000005e' : '#ffffff5e')}; 
    box-shadow:${props => (props.darkMode ? '0 4px 5px rgba(0, 0, 0, 0.534)' : '0 4px 5px rgba(83, 83, 83, 0.534)')};  
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 4rem;
`;
export const ContainerIcons = styled.div`
    position: relative;
    flex-direction: row;
    gap: 2rem;
    display: flex;
    top: 25%;
    /* align-items: center; */
    justify-content: center;
`;

