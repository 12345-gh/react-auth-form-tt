import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ShowPasswordIcon } from "./ShowPasswordIcon";

describe("ShowPasswordIcon component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(<ShowPasswordIcon data-testid="show-password-icon" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders correctly with children", () => {
        render(<ShowPasswordIcon data-testid="show-password-icon" />);
        expect(screen.getByTestId("show-password-icon")).toBeInTheDocument();
    });

    it("applies default props correctly", () => {
        render(<ShowPasswordIcon data-testid="show-password-icon" />);
        const icon = screen.getByTestId("show-password-icon");

        expect(getComputedStyle(icon).width).toBe("24px");
        expect(getComputedStyle(icon).height).toBe("24px");
        expect(getComputedStyle(icon).fill).toBe("#151D51");
    });
});
