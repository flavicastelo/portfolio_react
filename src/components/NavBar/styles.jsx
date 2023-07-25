// import styled from 'styled-components';
// import { colors } from "../../themes";

// export const ContainerMenu = styled.div`
// display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0.5rem;
//     background-color: ${(props) => (props.showMenu ? colors.color3 : 'transparent')};
//     position: fixed;
//     border-radius:  ${(props) => (props.showMenu ? '20px' : '50%')};
//     top: 25vh;
//     right: 4vw;
//     z-index: 2;
//     width: ${(props) => (props.showMenu ? '80px' : '80px')};
//     height: ${(props) => (props.showMenu ? '50vh' : '80px')};
//     transition: width 0.3s, height 0.3s;
    
// `;
// export const ContainerIcons = styled.div`
//     flex-direction: column;
//     height: 50vh;
//     position: relative;
//     gap: 2rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// export const ButtonOpen = styled.button`
//     position: relative;
//     background-color: ${colors.color6};
//     border: none;
//     outline: 0;
//     cursor: pointer;
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
 
// `;

// export const ButtonClose = styled.button`
//     border: none;
//     outline: 0;
//     cursor: pointer;
//     border-radius: 50%;
//     background-color: ${colors.color6};
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     top: -10px;
//     right: -5px;
// `;
import styled, { keyframes } from 'styled-components';
import { colors } from "../../themes";

export const ContainerMenu = styled.div`
    padding: 2rem;
     background-color: ${props => (props.darkMode ? '#0000005e' : '#ffffff5e')}; 
    /* box-shadow:${props => (props.darkMode ? '0 4px 5px rgba(0, 0, 0, 0.534)' : '0 4px 5px rgba(83, 83, 83, 0.534)')};   */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const ContainerIcons = styled.div`
    position: relative;
    flex-direction: row;
    gap: 2rem;
    display: flex;
    top: 25%;
    align-items: center;
    justify-content: center;
    
`;

export const TitleNavBar = styled.a`
    text-decoration: none;
    color: #01d0c0;
    font-weight: bold;
    font-family: 'Tektur', cursive;
    font-size: 28px;
`;

export const ContainerItens = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   width: 30vw;
   align-items: center;
`;
export const MenuItens = styled.a`
    text-decoration: none;
    color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
    font-weight: bold;
    font-family: 'Inter', cursive;
    font-size: 14px;
`;

const progressBarAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${(props) => props.scrollProgress}%;
  }
`;

export const ProgressBarBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px; 
  background: linear-gradient(to right, #01d0c0, #1bfdea);
  animation: ${progressBarAnimation} 0.5s ease-in-out; 
`;
export const LinkContact = styled.a`
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`;