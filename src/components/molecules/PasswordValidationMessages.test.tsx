import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PasswordValidationMessages } from "./PasswordValidationMessages";

describe("PasswordValidationMessages", () => {
    it("displays all validation messages", () => {
        render(<PasswordValidationMessages passwordValue="" isTouchedAndSubmitted={false} />);

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });

    it("shows validation messages when the password is invalid and touched", () => {
        render(<PasswordValidationMessages passwordValue="short" isTouchedAndSubmitted={true} />);

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });

    it("does not mark messages as valid for an invalid password", () => {
        render(<PasswordValidationMessages passwordValue="short" isTouchedAndSubmitted={true} />);

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });

    it("marks messages as valid for a valid password", () => {
        render(
            <PasswordValidationMessages
                passwordValue="ValidPass123"
                isTouchedAndSubmitted={true}
            />,
        );

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });

    it("updates validation status as password changes", () => {
        const { rerender } = render(
            <PasswordValidationMessages
                passwordValue="ValidPass123"
                isTouchedAndSubmitted={true}
            />,
        );

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();

        rerender(<PasswordValidationMessages passwordValue="short" isTouchedAndSubmitted={true} />);

        expect(screen.getByText("Has at least 8 characters (no spaces)")).toBeInTheDocument();
        expect(screen.getByText("Uppercase and lowercase letters")).toBeInTheDocument();
        expect(screen.getByText("1 digit minimum")).toBeInTheDocument();
    });
});
