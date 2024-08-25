import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { RealTimeAuthForm } from "./RealTimeAuthForm";

describe("RealTimeAuthForm", () => {
    it("renders the form with password input and sign up button", () => {
        render(<RealTimeAuthForm />);

        expect(
            screen.getByPlaceholderText("Password with real-time validation"),
        ).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
    });

    it("displays password validation messages in real-time", async () => {
        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");

        await userEvent.type(input, "short");

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });

    it("displays error state when password is invalid and form is submitted", async () => {
        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");
        const submitButton = screen.getByRole("button", { name: /sign up/i });

        await userEvent.type(input, "short");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(getComputedStyle(input).border).toBe("2px solid #ed5f59");
        });
    });

    it("displays success state when password is valid and form is submitted", async () => {
        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");
        const submitButton = screen.getByRole("button", { name: /sign up/i });

        await userEvent.type(input, "ValidPassword123");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(getComputedStyle(input).border).toBe("2px solid #5cd6c0");
        });
    });

    it("calls custom error handler correctly", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");
        const submitButton = screen.getByRole("button", { name: /sign up/i });

        await userEvent.type(input, "short");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleSpy).not.toHaveBeenCalled();
        });

        consoleSpy.mockRestore();
    });

    it("submits the form successfully when all validations pass", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");
        const submitButton = screen.getByRole("button", { name: /sign up/i });

        await userEvent.type(input, "ValidPassword123");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Form data", {
                password: "ValidPassword123",
            });
        });

        consoleSpy.mockRestore();
    });

    it("applies custom submit logic", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

        render(<RealTimeAuthForm />);

        const input = screen.getByPlaceholderText("Password with real-time validation");
        const submitButton = screen.getByRole("button", { name: /sign up/i });

        await userEvent.type(input, "short");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleSpy).not.toHaveBeenCalled();
        });

        await userEvent.clear(input);
        await userEvent.type(input, "ValidPassword123");
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Form data", {
                password: "ValidPassword123",
            });
        });

        consoleSpy.mockRestore();
    });
});
