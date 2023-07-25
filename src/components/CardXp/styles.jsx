import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: calc(33.33333%-2rem);
    height: 380px;
    background: #da58663d;
    background-color: ${props => (props.darkMode ? '#fffdfd3b' :'#ffffff')};
    border-radius: 4px;
    box-shadow: 0 4px 5px #00000019;
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    overflow: hidden;
    @media (max-width: 768px) {
        width: auto;
    }
    transition: transform 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 4px 5px #00000060;
    }
`;
export const ImgCard = styled.img`
    width: 90%;
    align-self: center;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`;
export const TitleCard = styled.h4`
      margin: 0.5rem 1rem 0;
      border-bottom: 1px solid rgb(231, 230, 230);
`;

export const DescriptionCard = styled.p`
  font-size: 14px;
  margin: 0 1rem; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  word-break: break-word;
`;

export const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`;

export const ButtonProject = styled.a`
    width: 90%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    background-color: ${colors.bgColor};
    border: 1px solid ${colors.bgColor};
    padding: 5px;
    border-radius: 5px;
    color: #FFF;
    font-size: 12px;
    cursor: pointer;
    font-weight: bold;
   
`;
export const LineStack = styled.div`
    margin: 1rem;
  border-bottom: 1px solid rgb(231, 230, 230);
`;

export const ButtonGitHub = styled.a`
    text-decoration: none;
    border: 1px solid ${colors.bgColor};
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    color: ${colors.bgColor};
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    &:hover {
        border: 1px solid ${colors.color6};
        background-color: ${props => (props.darkMode ? colors.color6 :'transparent')};
        color:  ${props => (props.darkMode ? colors.bgColor : colors.color6)};
    }
`;
export const ContainerStack = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.5rem 1rem;
    justify-content: space-around;
    gap: 0.5rem;
`;

export const TagStack = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    background-color: #EDDCFD;
    border-radius: 16px;
    padding: 4px;
    transition: transform 0.3s ease-in-out;
    cursor: default;
    &:hover {
        transform: scale(1.1); 
    }
`;

export const IconStack = styled.img`
    margin-top: 0;
    width: 15px;
    height: 15px;
  
    @media (max-width: 768px) {
        width: 15px;
    height: 15px;
    }
   
`;

export const TextStack = styled.p`
    font-size: 10px;
`;