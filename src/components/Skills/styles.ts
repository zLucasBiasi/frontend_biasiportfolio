import Image from "next/future/image";

import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  display: flex;

  align-items: center;
`;
export const WrapperCollum = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperJustify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const ContentSkills = styled.div`
  margin: 15rem 0;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.titleMedium};
    font-weight: 600;
    line-height: 4.8rem;
    color: ${theme.colors.white};

    @media (max-width: 600px) {
      font-size: ${theme.fonts.titleSmall};
      text-align: center;
      line-height: 4rem;
    }
    @media (max-width: 350px) {
      font-size: ${theme.fonts.titleSmallX2};
      line-height: 3rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    margin-top: 2.6rem;
    width: 50rem;
    font-size: ${theme.fonts.paragraphMedium};
    font-weight: 200;
    line-height: 3.6rem;

    text-align: left;

    color: ${theme.colors.gray};
    @media (max-width: 1000px) {
      font-size: ${theme.fonts.paragraphMedium};
    }

    @media (max-width: 600px) {
      font-size: ${theme.fonts.paragraphSmall};
      text-align: center;
      width: 98%;
    }

    @media (max-width: 350px) {
      font-size: ${theme.fonts.paragraphSmallX2};
      line-height: 3rem;
    }
  `}
`;

export const ImageStyle = styled(Image)`
  margin: 0 2rem;
  object-fit: cover;

  animation-name: rotateAnimation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate; //let's alternate back and forth!

  @keyframes rotateAnimation {
    0% {
      transform: rotate(0.5turn);
    }
    50% {
    }
    100% {
      transform: rotate(0turn);
    }
  }
  @media (max-width: 1000px) {
    margin: 4rem 1rem;
  }
  @media (max-width: 600px) {
    margin: 2rem 1.3rem;
    width: 6.5rem;
    height: 6.5rem;
  }

  @media (max-width: 350px) {
    margin: 2rem 1.2rem;
    width: 4.5rem;
    height: 4.5rem;
  }
`;
