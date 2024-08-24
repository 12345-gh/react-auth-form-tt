import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { PasswordToggle } from "./PasswordToggle";

describe("PasswordToggle component", () => {
    it("calls onClick handler when button is clicked", () => {
        const handleClick = vi.fn();
        render(<PasswordToggle isPasswordVisible={false} onClick={handleClick} />);

        fireEvent.click(screen.getByTestId("toggle-button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
