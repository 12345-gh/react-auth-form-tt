import React from "react";
import { styled } from "styled-components";

import { Container } from "@/components/atoms/Container";
import { AuthForm } from "@/components/organisms/AuthForm";

const StyledHeader = styled.h1`
    font-family: Moderat;
    font-weight: 900;
    text-transform: uppercase;
    color: #4b65ff;
`;

export const AuthPage: React.FC = () => {
    return (
        <Container>
            <StyledHeader>Sign Up</StyledHeader>
            <AuthForm />
        </Container>
    );
};
