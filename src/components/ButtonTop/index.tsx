import Image from "next/future/image";
import arrow from "/public/assets/arrow.svg";
import { scrollTop } from "./functions/scrollTop";

import * as S from "./styles";
import { useScroll } from "./hooks/useScroll";

export function ButtonTop() {
    const buttonScrollToTop = useScroll();

    return (
        <S.BtnTop
            aria-label="button top"
            ref={buttonScrollToTop}
            onClick={scrollTop}
        >
            <Image src={arrow} alt="arrow" />
        </S.BtnTop>
    );
}
