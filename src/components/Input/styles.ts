import styled, { css, DefaultTheme } from "styled-components";

interface LocalsTypes {
    Locals?: "Edit_profile" | "Dashboard";
}

const Local = {
    Edit_profile: (theme: DefaultTheme) => css`
        color: ${theme.colors.white};
    `,

    Dashboard: () => css`
        height: 2rem;
    `,
};

export const ContainerLogin = styled.div`
    padding: 1.6rem 0;
`;

export const Label = styled.label<LocalsTypes>`
    ${({ theme, Locals }) => css`
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${theme.colors.background};
        ${Locals && Local[Locals](theme)}
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
