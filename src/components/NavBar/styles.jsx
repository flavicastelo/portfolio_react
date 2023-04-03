import styled from 'styled-components';



export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:end;
    gap: 2rem;
    width: 100vw;
    height: 2rem;
    padding-right: 5rem;
`;

export const ItemMenu = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
   
`;

export const TextMenu = styled.p`
    color: ${(props) => props.clicked ? '#00d8ff': '#8791AF'};
    
    &:hover{
        color: #00d8ff;
    } 
`;

export const LinkCurriculo = styled.a`
  text-decoration: none;
`;
export const CurriculoBtn = styled.button`
    background-color: transparent;
    border: 1px solid #00d8ff;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
    width: 5rem;
    height: 1.5em;
    
`;