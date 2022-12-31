import { useEffect, useRef } from "react";

export const useScroll = () => {
    const buttonScrollToTop = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        document.addEventListener(`scroll`, () => {
            if (window.scrollY < 200) {
                buttonScrollToTop.current!.style.opacity = "0";
            } else {
                buttonScrollToTop.current!.style.opacity = "1";
            }
        });
    }, []);
    return buttonScrollToTop;
};
