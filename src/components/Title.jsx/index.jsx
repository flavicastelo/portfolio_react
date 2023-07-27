import { StyledTitle } from "./styles";
import React from 'react';

export default function Title(props) {
    const { darkMode, titleContent } = props;
    return(
        <StyledTitle>{titleContent}</StyledTitle>
    );
}