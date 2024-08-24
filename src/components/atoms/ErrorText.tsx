import React from "react";
import styled from "styled-components";

const StyledErrorText = styled.div`
    font-family: Moderat;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.24888889491558075px; // ^ ,, ^
    text-align: left;
    color: #ed5f59;
    padding-top: 10px;
    padding-left: 27px;
`;

interface ErrorProps {
    message: string;
}

export const ErrorText: React.FC<ErrorProps> = ({ message }) => {
    return <StyledErrorText>{message}</StyledErrorText>;
};
