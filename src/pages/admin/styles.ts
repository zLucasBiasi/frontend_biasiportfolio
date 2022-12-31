import styled, { css } from "styled-components";

export const WrapperContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const ProfileIconWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0 1rem;
    top: 3.5rem;
    right: 5rem;
`;

export const ProfileName = styled.span`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.2rem;
        color: ${theme.colors.gray};
    `}
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
`;

export const TitleInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 65vw;
`;

export const Table = styled.table`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        text-align: center;
        font-size: 1.2rem;
        padding: 2rem;
    `}
`;
export const Th = styled.th`
    font-size: 1.7rem;
    font-weight: 600;
`;

export const Td = styled.td`
    font-size: 1.4rem;
    padding: 2rem 0;
`;
