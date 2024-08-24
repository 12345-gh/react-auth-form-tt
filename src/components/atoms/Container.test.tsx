import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Container } from "./Container";

describe("Container component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(
            <Container>
                <div>Child Element</div>
            </Container>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders children correctly", () => {
        render(
            <Container>
                <div>Child Element</div>
            </Container>,
        );
        expect(screen.getByText("Child Element")).toBeInTheDocument();
    });
});
