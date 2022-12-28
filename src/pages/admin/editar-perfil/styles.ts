import Image from "next/future/image";

import styled, { css } from "styled-components";

export const Title = styled.h1`
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.8rem;
`;

export const Relative = styled.div`
    position: relative;
`;

export const StyleImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
`;

export const EditProfilePhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
    margin-left: 20rem;
`;
