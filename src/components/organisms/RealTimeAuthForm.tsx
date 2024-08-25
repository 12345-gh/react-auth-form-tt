import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

import { Button, FormBase } from "@/components/atoms";
import { hasDigit, hasMinLength, hasUppercaseAndLowercase } from "@/utils/passwordValidators";
import { registrationSchema } from "@/validations/schema";

import { PasswordInput } from "../molecules/inputs";
import { PasswordValidationMessages } from "../molecules/PasswordValidationMessages";

type RegistrationFormValues = Omit<z.infer<typeof registrationSchema>, "email">;

const StyledSignUpButton = styled(Button)`
    align-self: center;
`;

export const RealTimeAuthForm = () => {
    const methods = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema.omit({ email: true })),
        mode: "onSubmit",
    });

    const {
        handleSubmit,
        formState: { touchedFields, isSubmitted },
        watch,
    } = methods;

    const passwordValue = watch("password", "");

    const onSubmit: SubmitHandler<RegistrationFormValues> = useCallback((data) => {
        console.log("Form data", data);
    }, []);

    const getCustomError = useCallback(
        (error: boolean) => {
            return isSubmitted && error;
        },
        [isSubmitted],
    );

    const getCustomSubmit = useCallback(
        (value: string) => {
            return (
                isSubmitted &&
                hasMinLength(value) &&
                hasUppercaseAndLowercase(value) &&
                hasDigit(value)
            );
        },
        [isSubmitted],
    );

    return (
        <FormProvider {...methods}>
            <FormBase onSubmit={handleSubmit(onSubmit)} noValidate>
                <PasswordInput
                    name="password"
                    placeholder="Password with real-time validation"
                    customError={getCustomError}
                    customSubmit={getCustomSubmit}
                />

                <PasswordValidationMessages
                    passwordValue={passwordValue}
                    isTouchedAndSubmitted={!!touchedFields.password && isSubmitted}
                />

                <StyledSignUpButton type="submit">Sign Up</StyledSignUpButton>
            </FormBase>
        </FormProvider>
    );
};
