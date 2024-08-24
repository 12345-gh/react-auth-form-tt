import React, { useCallback, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styled } from "styled-components";

import { InputBase } from "@/components/atoms";

import { PasswordToggle } from "../PasswordToggle";

const StyledInputBase = styled(InputBase)`
    padding-right: 65px;
`;

interface PasswordInputProps {
    name: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ name, ...props }) => {
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
                                placeholder="Password"
                                error={!!error}
                                success={!error && isTouched}
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
