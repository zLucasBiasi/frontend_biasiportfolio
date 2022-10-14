import Image from "next/future/image";

import styled, { css, keyframes } from "styled-components";
import theme from "../../styles/theme";
interface OpenNavProps {
  openNav: boolean;
}
const navAnimation = keyframes`
  
  from{
  transform:translateX(10rem);
  background-color:transparent;
 
  
  }
  to{   
    transform:translateX(0);
    background-color:${theme.colors.grayNav};
  
    }
  
  `;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerList = styled.div<OpenNavProps>`
  ${({ openNav, theme }) => css`
    @media (max-width: 1000px) {
      overflow: hidden;
      width: 85%;
      height: 50%;

      display: ${openNav ? "flex" : "none"};
      position: absolute;
      top: 9rem;
      right: 3rem;
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
        animation: ${navAnimation} 0.2s linear forwards;
      }
    `}
`;

export const ListItems = styled.li`
  ${({ theme }) => css`
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
      margin-top: 10px;
      transition: 0.4s ease;
    }
    &:hover::after {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  `}

  @media (max-width:900px) {
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
