import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { usePasswordToggle } from "./usePasswordToggle";

describe("usePasswordToggle hook", () => {
    it("should initially hide the password", () => {
        const { result } = renderHook(() => usePasswordToggle());

        expect(result.current.visible).toBe(false);
    });

    it("should toggle visibility when the toggle function is called", () => {
        const { result } = renderHook(() => usePasswordToggle());

        expect(result.current.visible).toBe(false);

        act(() => {
            result.current.toggleVisibility();
        });

        expect(result.current.visible).toBe(true);

        act(() => {
            result.current.toggleVisibility();
        });

        expect(result.current.visible).toBe(false);
    });
});
