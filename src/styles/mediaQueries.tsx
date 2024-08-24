const size = {
    xs: "575.98px",
    sm: "576px",
    md: "768px",
    lg: "992px",
};

export const mediaQueries = {
    xs: `(max-width: ${size.xs})`,
    sm: `(min-width: ${size.sm}) and (max-width: ${size.md})`,
    md: `(min-width: ${size.md}) and (max-width: ${size.lg})`,
    lg: `(min-width: ${size.lg})`,
};
