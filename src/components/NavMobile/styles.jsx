import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  min-height: 100vh;
  background: transparent;
  position: absolute;
`;

export const Navigation = styled.div`
  width: 100vw;
  height: 5rem;
  background-color: ${props => (props.darkMode ? '#0000005e' : '#FFF')}; 
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  bottom: 0;
  z-index: 2;
`;

export const Ul = styled.ul`
  display: flex;
  width: 350px;
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
`;

export const A = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 65px;
  font-size: 1.5rem;
  text-align: center;
  top: 5px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  transition: 0.5s;
  color: ${colors.color6};
 
  ${Li}.active & {
    transform: translateY(-32px);
    background-color: ${colors.color6};
    color: #FFF;
    box-shadow: 0px 2px 5px gray;
    top: -5px;
  }
`;

export const Text = styled.span`
  position: absolute;
  color:${colors.color6};
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  
  opacity: 0;
  transform: translateY(20px);

  ${Li}.active & {
    transform: translateY(10px);
    opacity: 1;
  }
`;
export const Indicator = styled.div`
 position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: 0.5s;
  background-color: #FFF;
  
  ${Li}:nth-child(1).active ~ & {
    transform: translateX(calc(70px * 0));
  }

  ${Li}:nth-child(2).active ~ & {
    transform: translateX(calc(70px * 1));
  }

  ${Li}:nth-child(3).active ~ & {
    transform: translateX(calc(70px * 2));
  }

  ${Li}:nth-child(4).active ~ & {
    transform: translateX(calc(70px * 3));
  }

  ${Li}:nth-child(5).active ~ & {
    transform: translateX(calc(70px * 4));
  }
`;

// export const Indicator = styled.div`
//   position: absolute;
//   width: 58px;
//   height: 58px;
//   border-radius: 50%;
//   transition: 0.5s;

//   ${Li}:nth-child(1).active ~ & {
//     transform: translateY(-32px);
//   }
// `;
