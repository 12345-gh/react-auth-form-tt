import { error } from "console";
import React, { useCallback, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styled } from "styled-components";
import { boolean } from "zod";

import { InputBase } from "@/components/atoms";

import { PasswordToggle } from "../PasswordToggle";

const StyledInputBase = styled(InputBase)`
    padding-right: 65px;
`;

interface PasswordInputProps {
    name: string;
    placeholder?: string;
    customError?: (error: boolean) => boolean;
    customSubmit?: (value: string) => boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
    name,
    placeholder,
    customError,
    customSubmit,
    ...props
}) => {
    const { control } = useFormContext();
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handlePasswordToggle = useCallback(() => {
        setPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    return (
        <>
            <div style={{ position: "relative" }}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { error, isTouched } }) => (
                        <>
                            <StyledInputBase
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder={placeholder ? placeholder : "Password"}
                                error={customError ? customError(!!error) : !!error}
                                success={
                                    customSubmit
                                        ? customSubmit(field.value) && isTouched
                                        : !error && isTouched
                                }
                                {...field}
                                {...props}
                            />
                        </>
                    )}
                />
                <PasswordToggle
                    isPasswordVisible={isPasswordVisible}
                    onClick={handlePasswordToggle}
                />
            </div>
        </>
    );
};
