import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

import { Button, ErrorText } from "@/components/atoms";
import { EmailInput, PasswordInput } from "@/components/molecules/inputs";
import { mediaQueries } from "@/styles/mediaQueries";
import { registrationSchema } from "@/validations/schema";

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    border: 2px solid #70c3ff;
    border-radius: 45px;

    @media ${mediaQueries.xs} {
        padding: 15px;
        max-width: 100%;
    }

    @media ${mediaQueries.sm} {
        padding: 20px;
        max-width: 90%;
    }

    @media ${mediaQueries.md} {
        padding: 25px;
        max-width: 70%;
    }

    @media ${mediaQueries.lg} {
        padding: 30px;
        max-width: 50%;
    }
`;

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
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <EmailInput name="email" />
                <StyledFieldWrapper>
                    {errors["email"] && <ErrorText message={errors["email"].message as string} />}
                </StyledFieldWrapper>

                <PasswordInput name="password" />
                <StyledFieldWrapper>
                    {errors["password"] && (
                        <ErrorText message={errors["password"].message as string} />
                    )}
                </StyledFieldWrapper>
                <StyledSignUpButton type="submit">Sign Up</StyledSignUpButton>
            </StyledForm>
        </FormProvider>
    );
};
