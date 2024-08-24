import React from "react";
import styled from "styled-components";

import { mediaQueries } from "@/styles/mediaQueries";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
    width: 240px;
    height: 48px;
    padding: 15px 32px;
    gap: 10px;
    border-radius: 30px;
    opacity: 1;

    background: linear-gradient(110.46deg, #70c3ff 12.27%, #4b65ff 93.92%);
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    @media ${mediaQueries.xs} {
        max-width: 100%;
    }

    @media ${mediaQueries.sm} {
        max-width: 90%;
    }

    @media ${mediaQueries.md} {
        max-width: 70%;
    }

    @media ${mediaQueries.lg} {
        max-width: 50%;
    }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};
