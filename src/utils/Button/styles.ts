import styled, { css, DefaultTheme } from "styled-components";
interface ButtonProps {
    Locals?: "Button_Edit" | "Button_Dashboard";
}

const Local = {
    Button_Edit: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.blueCian};
        width: 15rem;
        height: 4rem;
        font-size: 1.5rem;
        margin-top: 2rem;
    `,

    Button_Dashboard: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.blueCian};
        width: 15rem;
        height: 4rem;
        font-size: 1.5rem;
        margin: 0;
    `,
};

export const Button = styled.button<ButtonProps>`
    ${({ theme, Locals }) => css`
        width: 100%;
        height: 5rem;
        border-radius: 1rem;
        background-color: ${theme.colors.background};
        color: ${theme.colors.white};
        border: none;
        outline: none;
        margin-top: 4rem;
        cursor: pointer;
        ${Locals && Local[Locals](theme)}
        &:hover {
            transform: translateY(-2px);
            filter: opacity(95%);
        }
        &:active {
            transform: translateY(0);
        }
    `}
`;
