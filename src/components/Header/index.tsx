import { useCallback, useEffect, useState } from "react";

import { Container } from "../../styles/global";
import { NavBar } from "../NavBar";
import { useOnScroll } from "./hooks";

import * as S from "./styles";

export const Header = () => {
    const { isScrolled } = useOnScroll();
    return (
        <>
            <S.Header isScrolled={isScrolled}>
                <Container>
                    <NavBar />
                </Container>
            </S.Header>
        </>
    );
};
