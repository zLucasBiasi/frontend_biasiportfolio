import styled, { css } from "styled-components";

export const CardProjects = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.blueCian};
        color: ${theme.colors.white};
        width: 25rem;
        height: 15rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        flex-direction: column;
    `}
`;

export const Span = styled.span`
    font-size: 3.5rem;
    font-weight: 600;
`;

export const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
`;
