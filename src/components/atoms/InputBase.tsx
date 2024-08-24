import styled from "styled-components";

export const StyledInputBase = styled.input<{
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
}>`
    font-family: Moderat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    position: relative;
    padding: 0 25px;
    width: 100%;
    height: 56px;
    border-radius: 60px;

    /* Default styles */
    background: #ffffff;
    color: #151d51b2;
    border: 2px solid #151d5133;
    caret-color: #151d51;

    ${({ disabled }) =>
        disabled &&
        `
        background: #151D511A;
        color: #151D51;
        border: 2px solid #151D5133;
        cursor: not-allowed;
    `}

    ${({ error }) =>
        error &&
        `
        background: #ED5F591A;
        color: #151D51;
        border: 2px solid #ED5F59;
    `}

    ${({ success }) =>
        success &&
        `
        background: #5CD6C01A;
        color: #151D51;
        border: 2px solid #5CD6C0;
    `}

    &:focus {
        border-color: #151d51;
    }
`;
