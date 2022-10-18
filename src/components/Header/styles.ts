import styled, { css } from "styled-components";

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = styled.header<HeaderProps>`
  ${({ theme, isScrolled }) => css`
    width: 100%;
    height: 10rem;
    position: sticky;
    top: 0;
    left: 0;

    z-index: 10;
    background: ${isScrolled
      ? "linear-gradient(180deg, #02000E 0%, rgba(2, 0, 14, 0.7) 100%);"
      : "transparen"};
    box-shadow: ${isScrolled ? " 0px 4px 20px 0px #FFFFFF1A;" : "none"};
  `}
`;
