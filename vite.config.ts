/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        globals: true,
        silent: true,
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
        exclude: [...configDefaults.exclude],
        setupFiles: "./src/setupTests.ts",
        coverage: {
            provider: "istanbul",
        },
    },
});
