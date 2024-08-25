import { zodResolver } from "@hookform/resolvers/zod";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { z } from "zod";

import { AuthForm } from "./AuthForm";

const registrationSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

describe("AuthForm component", () => {
    it("renders correctly", () => {
        render(<AuthForm />);

        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Password with late validation on blur"),
        ).toBeInTheDocument();
        expect(screen.getByText("Sign Up")).toBeInTheDocument();
    });

    it("shows error messages when validation fails", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    email: "",
                    password: "",
                },
            });

            return (
                <FormProvider {...methods}>
                    <AuthForm />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        userEvent.click(screen.getByText("Sign Up"));

        await waitFor(() => {
            expect(screen.getByText("Invalid email address")).toBeInTheDocument();
            expect(screen.getByText("Password must be at least 8 characters")).toBeInTheDocument();
        });
    });

    it("submits form data when inputs are valid", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    email: "test@example.com",
                    password: "password123",
                },
            });

            return (
                <FormProvider {...methods}>
                    <AuthForm />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        await userEvent.type(screen.getByPlaceholderText("Email"), "test@example.com");
        await userEvent.type(
            screen.getByPlaceholderText("Password with late validation on blur"),
            "truePassword123",
        );

        userEvent.click(screen.getByText("Sign Up"));

        await waitFor(() => {
            expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
            expect(
                screen.queryByText("Password must be at least 8 characters"),
            ).not.toBeInTheDocument();
        });
    });
});
