import React from "react";
import styled from "styled-components";

interface ContainerProps {
    children: React.ReactNode;
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(167.96deg, #f4f9ff 0%, #e0edfb 100%);
`;

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};
