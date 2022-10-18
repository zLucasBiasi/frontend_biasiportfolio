import styled, { css } from "styled-components";

export const ContentAbout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.paragraphMedium};
    font-weight: 200;
    line-height: 3.6rem;
    width: 60%;
    margin-bottom: 10rem;
    @media (max-width: 1000px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      font-size: ${theme.fonts.paragraphSmall};
      width: 100%;
      text-align: center;
    }
  `}
`;

export const Span = styled.span`
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
