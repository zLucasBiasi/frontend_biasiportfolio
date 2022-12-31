import styled, { css } from "styled-components";

export const TitleStyle = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.blueCian};
        font-size: ${theme.fonts.titleLarger};
        text-transform: uppercase;
        margin-top: 23rem;
        margin-bottom: 6rem;

        @media (max-width: 600px) {
            margin-top: 15rem;
            margin-bottom: 4rem;
            font-size: ${theme.fonts.titleMedium};
            width: 100%;
            text-align: center;
        }
    `}
`;
