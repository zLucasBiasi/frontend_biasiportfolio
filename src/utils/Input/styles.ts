import styled, { css } from "styled-components";

export const ContainerInput = styled.div`
    margin-top: 2.4rem;
`;

export const Label = styled.label`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${theme.colors.background};
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        width: 100%;
        height: 5rem;
        border-radius: 1rem;
        border: 1px solid ${theme.colors.grayInput};
        outline: none;
        padding: 0 2rem;
    `}
`;
