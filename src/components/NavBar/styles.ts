import Image from "next/future/image";

import styled, { css, keyframes } from "styled-components";
import theme from "../../styles/theme";
interface OpenNavProps {
  openNav: boolean;
}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleImage = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.5rem;

  @media (max-width: 1000px) {
    margin-left: 1.5rem;
  }
`;

export const DarkMode = styled.li`
  cursor: pointer;
`;

export const ContainerList = styled.div<OpenNavProps>`
  ${({ openNav, theme }) => css`
    @media (max-width: 1000px) {
      overflow: hidden;
      width: 85%;
      height: 30rem;
      border-radius: 0.8rem;
      opacity: ${openNav ? "1" : "0"};
      position: absolute;
      top: 9rem;
      right: ${openNav ? "3rem" : "110rem"};
      transition: 0.2s linear;
    }
  `}
`;

export const ContentList = styled.ul`
  ${({ theme }) =>
    css`
      display: flex;

      @media (max-width: 1000px) {
        background-color: ${theme.colors.grayNav};
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    `}
`;

export const ListItems = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: 0 2rem;
    font-size: ${theme.fonts.listNav};
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    &::after {
      content: "";
      width: 0%;
      height: 3px;
      background-color: ${theme.colors.blueCian};
      display: block;
      position: absolute;
      margin-top: 3rem;
      transition: 0.4s ease;
    }
    &:hover::after {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  `}

  @media (max-width:1000px) {
    padding: 1.5rem 0;

    font-size: 2rem;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.1em;
    text-align: left;
  }
`;

export const ImageHamb = styled(Image)`
  display: none;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`;
