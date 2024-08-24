import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
    width?: number;
    height?: number;
    color?: string;
    children: React.ReactNode;
}

const StyledIcon = styled.svg<IconWrapperProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    fill: ${({ color }) => color};
`;

export const IconWrapper: React.FC<IconWrapperProps> = ({
    width = 24,
    height = 24,
    color = "#151D51",
    children,
    ...props
}) => {
    return (
        <StyledIcon
            width={width}
            height={height}
            color={color}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {children}
        </StyledIcon>
    );
};
