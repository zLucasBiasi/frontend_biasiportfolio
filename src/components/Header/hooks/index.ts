import { useEffect, useState } from "react";

export const useOnScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollIsGreaterThanTwenty = () =>
            window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);

        window.addEventListener("scroll", scrollIsGreaterThanTwenty);

        return () =>
            window.removeEventListener("scroll", scrollIsGreaterThanTwenty);
    }, []);

    return { isScrolled };
};
