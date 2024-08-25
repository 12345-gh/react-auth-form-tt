import React from "react";
import { styled } from "styled-components";

import { Container } from "@/components/atoms/Container";
import { AuthForm } from "@/components/organisms/AuthForm";
import { RealTimeAuthForm } from "@/components/organisms/RealTimeAuthForm";

const StyledHeader = styled.svg`
    font-family: "Inter", sans-serif;
    font-weight: 900;
    width: 100%;
    height: 10%;

    text {
        animation: stroke 15s infinite alternate;
        stroke-width: 2;
        stroke: #4b65ff;
        font-size: 60px;
    }

    @keyframes stroke {
        0% {
            fill: rgba(72, 138, 204, 0);
            stroke: rgba(54, 95, 160, 1);
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 2;
        }
        70% {
            fill: rgba(72, 138, 204, 0);
            stroke: rgba(54, 95, 160, 1);
        }
        80% {
            fill: rgba(72, 138, 204, 0);
            stroke: rgba(54, 95, 160, 1);
            stroke-width: 3;
        }
        100% {
            fill: rgba(72, 138, 204, 1);
            stroke: rgba(54, 95, 160, 0);
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 0;
        }
    }
`;

const StyledFormWrapper = styled.div`
    width: 100%;
    margin: 15px 0;
`;

export const AuthPage: React.FC = () => {
    return (
        <Container>
            <StyledHeader>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Sign Up
                </text>
            </StyledHeader>

            <StyledFormWrapper>
                <AuthForm />
            </StyledFormWrapper>

            <StyledFormWrapper>
                <RealTimeAuthForm />
            </StyledFormWrapper>
        </Container>
    );
};
