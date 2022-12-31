import styled, { css } from "styled-components";

export const ContentHero = styled.div`
    margin-top: 7rem;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fonts.titleLarger};
        font-weight: 600;
        line-height: 7rem;

        @media (max-width: 1000px) {
            font-size: ${theme.fonts.titleSmall};
            text-align: center;
            line-height: 5rem;
        }
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
        width: 100%;
      }
    }
    @media (max-width: 600px) {
      font-size: ${theme.fonts.paragraphSmall};

    
    
    }
    
  `}
`;
export const Span = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.fonts.titleExtraLarger};
        color: ${theme.colors.blueCian};
        font-weight: 700;
        @media (max-width: 1000px) {
            font-size: ${theme.fonts.titleLarger};
        }

        @media (max-width: 330px) {
            font-size: ${theme.fonts.titleMedium};
        }
    `}
`;
