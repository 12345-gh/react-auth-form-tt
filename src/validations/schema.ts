import * as z from "zod";

export const registrationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(64, { message: "Password must be at most 64 characters" })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase letter",
        })
        .regex(/[0-9]/, {
            message: "Password must contain at least one number",
        })
        .regex(/^\S+$/, {
            message: "Password cannot contain spaces",
        }),
});
