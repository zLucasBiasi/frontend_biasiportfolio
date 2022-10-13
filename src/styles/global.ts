import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Poppins", sans-serif;
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
  max-width: 120rem;
  padding: 0 3rem;
  margin: 0 auto;
  width: 100%;
`;
