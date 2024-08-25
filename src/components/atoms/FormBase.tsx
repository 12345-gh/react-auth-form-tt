import styled from "styled-components";

import { mediaQueries } from "@/styles/mediaQueries";

export const StyledFormBase = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    border: 2px solid #70c3ff;
    border-radius: 45px;

    @media ${mediaQueries.xs} {
        padding: 15px;
        max-width: 100%;
    }

    @media ${mediaQueries.sm} {
        padding: 20px;
        max-width: 90%;
    }

    @media ${mediaQueries.md} {
        padding: 25px;
        max-width: 70%;
    }

    @media ${mediaQueries.lg} {
        padding: 30px;
        max-width: 50%;
    }
`;
