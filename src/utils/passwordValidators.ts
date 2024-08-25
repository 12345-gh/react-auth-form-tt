export const hasMinLength = (value: string) => value.length >= 8;

export const hasUppercaseAndLowercase = (value: string) =>
    /[a-z]/.test(value) && /[A-Z]/.test(value);

export const hasDigit = (value: string) => /\d/.test(value);
