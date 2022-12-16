import styled, { css } from "styled-components";

export const ContentContact = styled.div`
    margin: 15rem 0;
    position: relative;
`;

export const TitleContact = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fonts.paragraphMedium};
        font-weight: 400;
        margin: 2rem 0;

        color: ${theme.colors.gray};

        @media (max-width: 600px) {
            font-size: ${theme.fonts.paragraphSmall};
            text-align: center;
            width: 98%;
        }

        @media (max-width: 350px) {
            font-size: ${theme.fonts.paragraphSmallX2};
            line-height: 3rem;
        }
    `}
`;

export const TitleEmail = styled.a`
    ${({ theme }) => css`
        font-size: ${theme.fonts.titleMedium};
        color: ${theme.colors.white};
        font-weight: 700;

        @media (max-width: 600px) {
            display: flex;
            justify-content: center;
            font-size: ${theme.fonts.titleSmall};
        }
        @media (max-width: 350px) {
            font-size: ${theme.fonts.paragraphSmall};
            line-height: 3rem;
        }
    `}
`;

export const Call = styled.a`
    ${({ theme }) =>
        css`
            color: ${theme.colors.gray};
        `}
`;

export const Copyrigth = styled.span`
    ${({ theme }) => css`
        position: absolute;
        left: 0;
        bottom: -110px;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 3rem;
        color: ${theme.colors.gray};
        @media (max-width: 600px) {
            text-align: center;
        }
        @media (max-width: 400px) {
            font-size: 1rem;
        }
        @media (max-width: 350px) {
            bottom: -100px;
            font-size: 0.8rem;
        }
        @media (max-width: 340px) {
            bottom: -70px;
        }
    `}
`;
