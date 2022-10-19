import styled, { css } from "styled-components";

export const BtnTop = styled.button`
  ${({ theme }) => css`
    position: fixed;
    bottom: 40px;
    right: 40px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: ${theme.colors.blueCian};
    color: black;

    cursor: pointer;
    border: none;
    display: flex;
    opacity: 0;
    transition: all 0.4s ease;
    justify-content: center;
    align-items: center;
    outline: none;
    &:hover {
      transform: scale(1.1);
    }
  `}
`;
