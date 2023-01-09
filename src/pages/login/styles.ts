import Image from "next/future/image";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardLogin = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};

        display: flex;
        justify-content: center;
        align-items: center;

        width: 35rem;

        padding: 1.5rem;
        border-radius: 1rem;
        position: relative;
    `}
`;
export const StyleImage = styled(Image)`
    position: absolute;
    right: 3.8rem;
    top: 16.7rem;
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
`;

export const Error = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.black};
    `}
`;
