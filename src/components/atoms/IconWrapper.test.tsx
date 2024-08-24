import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconWrapper } from "./IconWrapper";

describe("IconWrapper component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(
            <IconWrapper width={32} height={32} color="#FF5733" data-testid="icon">
                <circle cx="16" cy="16" r="12" />
            </IconWrapper>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders children correctly", () => {
        render(
            <IconWrapper data-testid="icon">
                <circle cx="12" cy="12" r="10" />
            </IconWrapper>,
        );
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("applies default props correctly", () => {
        render(
            <IconWrapper data-testid="icon">
                <circle cx="12" cy="12" r="10" />
            </IconWrapper>,
        );
        const icon = screen.getByTestId("icon");

        expect(getComputedStyle(icon).width).toBe("24px");
        expect(getComputedStyle(icon).height).toBe("24px");
        expect(getComputedStyle(icon).fill).toBe("#151D51");
    });

    it("applies custom props correctly", () => {
        render(
            <IconWrapper width={32} height={32} color="#FF5733" data-testid="icon">
                <circle cx="16" cy="16" r="12" />
            </IconWrapper>,
        );
        const icon = screen.getByTestId("icon");

        expect(getComputedStyle(icon).width).toBe("32px");
        expect(getComputedStyle(icon).height).toBe("32px");
        expect(getComputedStyle(icon).fill).toBe("#FF5733");
    });
});
