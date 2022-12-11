import { useCallback, useEffect, useState } from "react";

import { Container } from "../../styles/global";
import { NavBar } from "../NavBar";

import * as S from "./styles";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const onScroll = useCallback(() => {
        const scrollIsGreaterThanTwenty = () =>
            window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);

        window.addEventListener("scroll", scrollIsGreaterThanTwenty);

        return () =>
            window.removeEventListener("scroll", scrollIsGreaterThanTwenty);
    }, []);
    useEffect(() => {
        onScroll();
    }, [onScroll]);

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
