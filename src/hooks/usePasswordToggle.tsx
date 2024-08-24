import { useState } from "react";

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    return { visible, toggleVisibility };
};
