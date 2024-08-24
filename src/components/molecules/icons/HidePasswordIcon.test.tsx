import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HidePasswordIcon } from "./HidePasswordIcon";

describe("HidePasswordIcon component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(<HidePasswordIcon data-testid="hide-password-icon" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders correctly with children", () => {
        render(<HidePasswordIcon data-testid="hide-password-icon" />);
        expect(screen.getByTestId("hide-password-icon")).toBeInTheDocument();
    });

    it("applies default props correctly", () => {
        render(<HidePasswordIcon data-testid="hide-password-icon" />);
        const icon = screen.getByTestId("hide-password-icon");

        expect(getComputedStyle(icon).width).toBe("24px");
        expect(getComputedStyle(icon).height).toBe("24px");
        expect(getComputedStyle(icon).fill).toBe("#151D51");
    });
});
