import styled, {keyframes} from "styled-components";
import '../../index.css';

export const ContainerHome = styled.div` 
    display: flex;
    background-color: #252627;
    flex-direction: column;
    
`;
export const ContainerBody = styled.body`
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;
export const TextTitle = styled.p`
    color: #afafaf;
`;
export const Name = styled.h1`
    color: #5ccee2;
    font-size: 36px;
`;
export const Description = styled.p`
    color: #afafaf;
   font-size: 18px;
`;

//animations
export const blinkTextCursor = keyframes`
    from {border-right-color: rgba(0, 0, 0, .75);}
    to {border-right-color: transparent}
`;
export const TextCursor = styled.span`
    border-right: 2px solid rgba(0, 0, 0, .75);
  display: inline;

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
export const Container = styled.p`
  display: inline-block;
  margin: 0;
`;