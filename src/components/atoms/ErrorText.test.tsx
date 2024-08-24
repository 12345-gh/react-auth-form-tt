import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ErrorText } from "./ErrorText";

describe("ErrorText component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(<ErrorText message="Snapshot Test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the message correctly", () => {
        render(<ErrorText message="This is an error message" />);
        expect(screen.getByText("This is an error message")).toBeInTheDocument();
    });
});
