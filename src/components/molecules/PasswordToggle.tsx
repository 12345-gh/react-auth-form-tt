import React from "react";
import styled from "styled-components";

import { HidePasswordIcon, ShowPasswordIcon } from "@/components/molecules/icons";

interface PasswordToggleProps {
    isPasswordVisible: boolean;
    onClick: () => void;
}

const ToggleButton = styled.span`
    position: absolute;
    right: 25px;
    top: 16px;
    background: none;
    border: none;
    cursor: pointer;
`;

export const PasswordToggle: React.FC<PasswordToggleProps> = ({ isPasswordVisible, onClick }) => {
    return (
        <ToggleButton onClick={onClick} data-testid="toggle-button">
            {isPasswordVisible ? <HidePasswordIcon /> : <ShowPasswordIcon />}
        </ToggleButton>
    );
};
