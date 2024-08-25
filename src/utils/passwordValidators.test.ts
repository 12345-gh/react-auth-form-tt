import { describe, expect, it } from "vitest";

import { hasDigit, hasMinLength, hasUppercaseAndLowercase } from "./passwordValidators";

describe("Password validation functions", () => {
    describe("hasMinLength", () => {
        it("returns true if the string has at least 8 characters", () => {
            expect(hasMinLength("12345678")).toBe(true);
            expect(hasMinLength("abcdefgh")).toBe(true);
        });

        it("returns false if the string has fewer than 8 characters", () => {
            expect(hasMinLength("1234567")).toBe(false);
            expect(hasMinLength("abcdefg")).toBe(false);
        });
    });

    describe("hasUppercaseAndLowercase", () => {
        it("returns true if the string contains both uppercase and lowercase letters", () => {
            expect(hasUppercaseAndLowercase("AbcdefgH")).toBe(true);
            expect(hasUppercaseAndLowercase("aBcdefgh")).toBe(true);
        });

        it("returns false if the string contains only lowercase letters", () => {
            expect(hasUppercaseAndLowercase("abcdefgh")).toBe(false);
        });

        it("returns false if the string contains only uppercase letters", () => {
            expect(hasUppercaseAndLowercase("ABCDEFGH")).toBe(false);
        });

        it("returns false if the string contains neither uppercase nor lowercase letters", () => {
            expect(hasUppercaseAndLowercase("12345678")).toBe(false);
            expect(hasUppercaseAndLowercase("!@#$%^&*")).toBe(false);
        });
    });

    describe("hasDigit", () => {
        it("returns true if the string contains at least one digit", () => {
            expect(hasDigit("abc123")).toBe(true);
            expect(hasDigit("Password1")).toBe(true);
        });

        it("returns false if the string does not contain any digits", () => {
            expect(hasDigit("abcdefgH")).toBe(false);
            expect(hasDigit("!@#$%^&*")).toBe(false);
        });
    });
});
