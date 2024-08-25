import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

import { Button, ErrorText, FormBase } from "@/components/atoms";
import { EmailInput, PasswordInput } from "@/components/molecules/inputs";
import { registrationSchema } from "@/validations/schema";

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const StyledSignUpButton = styled(Button)`
    align-self: center;
`;

const StyledFieldWrapper = styled.div`
    height: 45px;
`;

const defaultValues: RegistrationFormValues = {
    email: "",
    password: "",
};

export const AuthForm: React.FC = () => {
    const methods = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
        mode: "onBlur", // Late validation on blur
        defaultValues: defaultValues,
    });

    const {
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <FormBase onSubmit={handleSubmit(onSubmit)} noValidate>
                <EmailInput name="email" />
                <StyledFieldWrapper>
                    {errors["email"] && <ErrorText message={errors["email"].message as string} />}
                </StyledFieldWrapper>

                <PasswordInput
                    name="password"
                    placeholder="Password with late validation on blur"
                />
                <StyledFieldWrapper>
                    {errors["password"] && (
                        <ErrorText message={errors["password"].message as string} />
                    )}
                </StyledFieldWrapper>
                <StyledSignUpButton type="submit">Sign Up</StyledSignUpButton>
            </FormBase>
        </FormProvider>
    );
};
