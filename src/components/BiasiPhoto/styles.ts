import Image from "next/future/image";

import styled, { css } from "styled-components";

interface ButtonProps {
    Locals?: "Photo_Edit";
}

const Local = {
    Photo_Edit: () => css`
        width: 20rem;
        height: 20rem;
    `,
};

export const ImageStyle = styled(Image)<ButtonProps>`
    ${({ Locals }) => css`
        ${Locals && Local[Locals]()}
        @media (max-width: 1000px) {
            width: 35rem;
            height: 35rem;
            object-fit: cover;
        }

        @media (max-width: 600px) {
            width: 30rem;
            height: 30rem;
        }
        @media (max-width: 330px) {
            width: 20rem;
            height: 20rem;
        }
    `}
`;
