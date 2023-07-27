import styled,  {keyframes, css}from 'styled-components';
import { colors } from "../../themes";

const fadeInBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


export const ContainerContact = styled.section`
    display: flex;
    background-color: ${props => (props.darkMode ? colors.contrastColor : colors.bgLightMode)};
    justify-content: center;
    align-items: start;
    padding: 3rem;
    height: 100vh;
    padding-top: 6rem;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
    }
`;

export const ContainerBodyContact = styled.body`
    margin: 2rem;
    height: 100%;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.darkMode ? '#313131' :'#ffffff')};
    border-radius: 4px;
    box-shadow: 0 4px 5px #0000005f;
    @media (min-width: 769px) {
        ${({ isVisible }) =>
            isVisible &&
            css`
                animation: ${fadeInBottom} 2s ease-in-out;
            `}
    }
    @media (max-width: 768px) {
        margin: 0;
        height: auto;
    }
`;
export const ContainerTextContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerIconsContact = styled.div`
    display: flex;
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
export const LinkContact = styled.a`
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`;

export const DescriptionContact = styled.p`
     color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
     margin-bottom: 1rem;
`;
export const FormContainer = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: start;
  
`;
export const RequiredAsterisk = styled.span`
  color: red;
`;

export const Label = styled.label`
  display: block;
  color: ${props => (props.darkMode ? colors.color2 : colors.color5)};
  margin-bottom: 4px;
  font-size: 12px;
  ${({ required }) =>
    required &&
    css`
      position: relative;
      &:after {
        content: '*';
        position: absolute;
        top: 0;
        right: -10px;
        color: red;
      }
    `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: ${colors.color6};
    box-shadow: 0 0 5px ${colors.color6};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: ${colors.color6};
    box-shadow: 0 0 5px ${colors.color6};
  }
`;

export const SubmitButton = styled.button`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    gap: 0.5rem;
    font-weight: 600;
    background-color: ${props => (props.darkMode ? colors.color6 : colors.bgColor)};
    border: none;
    width: 150px;
    height: 30px;
    padding: 5px;
    letter-spacing: 2px;
    border-radius: 5px;
    color: ${props => (props.darkMode ? colors.bgColor : colors.color2)};
    font-size: 12px;
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right, #01d0c0, #1bfdea);
       color: ${colors.bgColor};
    }
`;
