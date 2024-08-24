import { zodResolver } from "@hookform/resolvers/zod";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import { registrationSchema } from "@/validations/schema";

import { PasswordInput } from "./PasswordInput";

describe("PasswordInput component", () => {
    it("renders correctly", () => {
        const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    password: "",
                },
            });

            return <FormProvider {...methods}>{children}</FormProvider>;
        };

        render(
            <FormWrapper>
                <PasswordInput name="password" />
            </FormWrapper>,
        );

        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });

    it("shows error when validation fails", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    password: "",
                },
            });

            methods.trigger = vi.fn(() => Promise.resolve(false));

            return (
                <FormProvider {...methods}>
                    <PasswordInput name="password" data-testid="password-input" />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        const input = screen.getByTestId("password-input");

        await userEvent.type(input, "short");
        await userEvent.tab();

        await waitFor(() => {
            expect(getComputedStyle(input).border).toBe("2px solid #ed5f59");
        });
    });

    it("displays success state when input is touched and valid", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    password: "",
                },
            });

            methods.trigger = vi.fn(() => Promise.resolve(true));

            return (
                <FormProvider {...methods}>
                    <PasswordInput name="password" data-testid="password-input" />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        const input = screen.getByTestId("password-input");

        await userEvent.type(input, "validPassword123");
        await userEvent.tab();

        await waitFor(() => {
            expect(getComputedStyle(input).border).toBe("2px solid #5cd6c0");
        });
    });

    it("toggles password visibility", async () => {
        const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
            const methods = useForm();

            return <FormProvider {...methods}>{children}</FormProvider>;
        };

        render(
            <FormWrapper>
                <PasswordInput name="password" data-testid="password-input" />
            </FormWrapper>,
        );

        const input = screen.getByTestId("password-input");
        const toggleButton = screen.getByTestId("toggle-button");

        expect(input).toHaveAttribute("type", "password");

        await userEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "text");

        await userEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "password");
    });
});
