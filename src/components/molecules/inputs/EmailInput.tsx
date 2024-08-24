import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { InputBase } from "@/components/atoms";

interface EmailInputProps {
    name: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({ name, ...props }) => {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error, isTouched } }) => {
                    return (
                        <div style={{ position: "relative" }}>
                            <InputBase
                                type="email"
                                placeholder="Email"
                                error={!!error}
                                success={!error && isTouched}
                                maxLength={100}
                                {...field}
                                {...props}
                            />
                        </div>
                    );
                }}
            />
        </>
    );
};
