import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe("Button component", () => {
    it("matches the snapshot", () => {
        const { asFragment } = render(<Button>Click Me</Button>);
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders the Button component with children", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("responds to click events", async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        await userEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
