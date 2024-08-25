import styled from "styled-components";

import { hasDigit, hasMinLength, hasUppercaseAndLowercase } from "@/utils/passwordValidators";

const ValidationMessage = styled.p<{ valid: boolean; touched: boolean }>`
    font-family: Moderat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: ${({ valid, touched }) => (valid ? `#009796` : touched ? `#ED5F59` : `#151D51B2`)};
    padding-left: 27px;
`;

export const PasswordValidationMessages = ({
    passwordValue,
    isTouchedAndSubmitted,
}: {
    passwordValue: string;
    isTouchedAndSubmitted: boolean;
}) => (
    <div>
        <ValidationMessage valid={hasMinLength(passwordValue)} touched={isTouchedAndSubmitted}>
            Has at least 8 characters (no spaces)
        </ValidationMessage>
        <ValidationMessage
            valid={hasUppercaseAndLowercase(passwordValue)}
            touched={isTouchedAndSubmitted}
        >
            Uppercase and lowercase letters
        </ValidationMessage>
        <ValidationMessage valid={hasDigit(passwordValue)} touched={isTouchedAndSubmitted}>
            1 digit minimum
        </ValidationMessage>
    </div>
);
