import styled, { css } from "styled-components";

export const TitleStyle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blueCian};
    font-size: ${theme.fonts.titleLarger};
    text-transform: uppercase;
    margin-bottom: 6rem;

    @media (max-width: 600px) {
      margin-top: 8rem;
      margin-bottom: 4rem;
      font-size: ${theme.fonts.titleLarger};
      width: 100%;
      text-align: center;
    }
  `}
`;
