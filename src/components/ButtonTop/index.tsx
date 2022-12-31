import { useEffect, useRef } from "react";

import Image from "next/future/image";
import arrow from "/public/assets/arrow.svg";

import * as S from "./styles";

export function ButtonTop() {
    const buttonEl = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        document.addEventListener(`scroll`, () => {
            if (window.scrollY < 200) {
                buttonEl.current!.style.opacity = "0";
            } else {
                buttonEl.current!.style.opacity = "1";
            }
        });
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <S.BtnTop aria-label="button top" ref={buttonEl} onClick={scrollTop}>
            <Image src={arrow} alt="arrow" />
        </S.BtnTop>
    );
}
