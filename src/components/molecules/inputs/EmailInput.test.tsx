import { zodResolver } from "@hookform/resolvers/zod";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import { registrationSchema } from "@/validations/schema";

import { EmailInput } from "./EmailInput";

describe("EmailInput component", () => {
    it("renders correctly", () => {
        const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
            const methods = useForm();

            return <FormProvider {...methods}>{children}</FormProvider>;
        };

        render(
            <FormWrapper>
                <EmailInput name="email" />
            </FormWrapper>,
        );

        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    });

    it("shows error when validation fails", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    email: "",
                },
            });

            methods.trigger = vi.fn(() => Promise.resolve(false));

            return (
                <FormProvider {...methods}>
                    <EmailInput name="email" data-testid="email-input" />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        const input = screen.getByTestId("email-input");

        await userEvent.type(input, "invalid-email");
        await userEvent.tab();

        await waitFor(() => {
            expect(getComputedStyle(input).background).toBe("rgba(237, 95, 89, 0.102)");
            expect(getComputedStyle(input).color).toBe("rgb(21, 29, 81)");
            expect(getComputedStyle(input).border).toBe("2px solid #ed5f59");
        });
    });

    it("displays success state when input is touched and valid", async () => {
        const FormWithValidation: React.FC = () => {
            const methods = useForm({
                resolver: zodResolver(registrationSchema),
                mode: "onBlur",
                defaultValues: {
                    email: "",
                },
            });

            methods.trigger = vi.fn(() => Promise.resolve(true));

            return (
                <FormProvider {...methods}>
                    <EmailInput name="email" data-testid="email-input" />
                </FormProvider>
            );
        };

        render(<FormWithValidation />);

        const input = screen.getByTestId("email-input");

        await userEvent.type(input, "test@example.com");
        await userEvent.tab();

        await waitFor(() => {
            expect(getComputedStyle(input).background).toBe("rgba(92, 214, 192, 0.102)");
            expect(getComputedStyle(input).color).toBe("rgb(21, 29, 81)");
            expect(getComputedStyle(input).border).toBe("2px solid #5cd6c0");
        });
    });
});
