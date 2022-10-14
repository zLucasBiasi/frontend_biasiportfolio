import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 1rem;
      background: ${theme.colors.background};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.blueCian};
      border-radius: 50px;
    }
    body {
      font-family: "Poppins", sans-serif;
      background-color: ${theme.colors.background};
      color: ${theme.colors.white};
      overflow-x: hidden;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    html {
      font-size: 62.5%;
    }
  `}
`;

export const Container = styled.div`
  max-width: 125rem;
  padding: 0 3rem;
  margin: 0 auto;
  width: 100%;
`;
