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

export const TextMenu = styled.p`
    color: #FFF;
    
    padding: 0 1rem;
   
`;

export const LinkCurriculo = styled.a`
  text-decoration: none;
`;
export const CurriculoBtn = styled.button`
    background-color: transparent;
    border: 1px solid #00a2dd;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
    height: 1.5em;
     
    &:hover{
        background-color: #00a2dd;
    } 
`;