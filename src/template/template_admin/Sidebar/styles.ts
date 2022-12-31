import styled, { css } from "styled-components";

import Image from "next/future/image";

const wrapperModify = {
    selected: () => css`
        background-color: #808080;
    `,
};

type ItemType = { selected: boolean };

export const Wrapper = styled.div``;

export const Sidebar = styled.aside`
    ${({ theme }) => css`
        max-width: 25rem;
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
    `}
`;

export const Logo = styled(Image)`
    margin: 2.4rem 3.35rem 10rem 6rem;
    height: 6rem;
`;

export const List = styled.ul`
    width: 100%;
    color: #fff;
`;

export const Item = styled.li<ItemType>`
    ${({ selected }) => css`
        display: flex;
        align-items: center;
        height: 5.6rem;
        padding: 0 3.35rem;
        ${selected && wrapperModify.selected()}
    `}
`;

export const Icon = styled(Image)`
    margin-right: 0.8rem;
    width: 2rem;
    height: 2rem;
`;

export const Span = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
`;
