import styled, {keyframes} from 'styled-components';
import { colors } from "../../themes";

export const ContainerDarkMode = styled.div`
    
   
`;
const slideIn = keyframes`
  0% {
    left: 12px;
  }
  100% {
    left: 40px;
  }
`;

const slideOut = keyframes`
  0% {
    left: 40px;
  }
  100% {
    left: 12px;
  }
`;

export const Btn = styled.div`
  width: 55px;
  height: 24px;
  border: 2px solid ${colors.color5};
  border-radius: 60px;
  position: relative;
  cursor: pointer;

  & > .icon {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    transition: left 0.5s ease-in-out, color 0.5s ease-in-out;
    color: ${colors.color5};
   
  }

  &.active {
    border: 2px solid ${colors.color6};
    & > .icon {
      left: 70px;
      color: ${colors.color6};
    }
  }
  &.active > .icon {
    animation: ${slideIn} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }

  &:not(.active) > .icon {
    animation: ${slideOut} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
