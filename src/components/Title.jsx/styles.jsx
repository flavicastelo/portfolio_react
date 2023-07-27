import styled,  {css}from 'styled-components';
import { colors } from "../../themes";

export const StyledTitle = styled.p`
    color: ${colors.color6};
    font-size: 32px;
    margin-bottom: 1rem;
    white-space: nowrap;
    font-family: 'Tektur', cursive;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;