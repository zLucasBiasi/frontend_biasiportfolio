import Image from "next/future/image";

import styled from "styled-components";

export const ImageStyle = styled(Image)`
  @media (max-width: 1000px) {
    width: 35rem;
    height: 35rem;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 30rem;
    height: 30rem;
  }
`;
