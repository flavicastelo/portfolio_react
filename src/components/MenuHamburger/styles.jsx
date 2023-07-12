import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    padding: 0.5rem;
    background-color: ${props => (props.darkMode ? colors.bgColor : colors.color3)};
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

