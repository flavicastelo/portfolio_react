import styled from 'styled-components';
import { colors } from "../../themes";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 300px;
    height: 320px;
    text-align: center;
    background: #da58663d;
    background-color: ${props => (props.darkMode ? '#fffdfd3b' :'#da58663d')};
    border-radius: 16px;
    box-shadow: 0 4px 30px #00000019;
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border: 1px solid #da58664c;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`;
export const ImgCard = styled.img`
    width: 90%;
    border-radius: 20px;
    margin-top: 1rem;
    align-self: center;
`;
export const TitleCard = styled.h4`
    margin-top: 0.5rem;
`;

export const DescriptionCard = styled.p`
    font-size: 12px;
    margin: 0.5rem 0;
    
`;
export const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`;

export const ButtonProject = styled.a`
    width: 100px;
    text-decoration: none;
    border: 1px solid ${colors.bgColor};
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