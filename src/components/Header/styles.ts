import styled, { css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 4rem;
    font-weight: 600;
    line-height: 7rem;

    @media (max-width: 600px) {
      font-size: ${theme.fonts.titleSmall};
      text-align: center;
      line-height: 5rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.paragraphMedium};
    color: ${theme.colors.gray};
   
    font-weight: 400;
    white-space: nowrap;
      overflow: hidden;
      animation: typewriter 2s steps(500) infinite alternate;
     
      
    }
    @keyframes typewriter {
      from {
        width: 0%;
      }
   
      to{
        width: 75%;
      }
    }
    @media (max-width: 600px) {
      font-size: ${theme.fonts.paragraphSmall};

      @keyframes typewriter {
      from {
        width: 0%;
      }
   
      to{
        width: 88%;
      }
    }
    }
    
  `}
`;
export const Span = styled.span`
  ${({ theme }) => css`
    font-size: 7.2rem;
    color: ${theme.colors.blueCian};
    font-weight: 700;
    @media (max-width: 1000px) {
      font-size: 4rem;
    }
  `}
`;
