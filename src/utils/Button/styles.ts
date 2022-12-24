import styled, { css } from "styled-components";

export const Button = styled.button`
    ${({ theme }) => css`
        width: 100%;
        height: 5rem;
        border-radius: 1rem;
        background-color: ${theme.colors.background};
        color: ${theme.colors.white};
        border: none;
        outline: none;
        margin-top: 4rem;
        cursor: pointer;
        &:hover {
            transform: translateY(-2px);
            filter: opacity(95%);
        }
        &:active {
            transform: translateY(0);
        }
    `}
`;
