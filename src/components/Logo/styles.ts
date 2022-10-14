import Image from "next/future/image";

import styled from "styled-components";

export const LogoStyle = styled(Image)`
  width: 20rem;

  @media (max-width: 1000px) {
    width: 20rem;
  }
`;
