import { useContext, useState } from "react";
import { Link } from "react-scroll";

import { Logo } from "../Logo";
import hamb from "/public/assets/hamburguer.svg";
import sun from "/public/assets/light.svg";
import moon from "/public/assets/dark.svg";
import { DarkModeContext } from "../../context/darkMode";
import { LogoDark } from "../LogoDark";

import * as S from "./styles";

export const NavBar = () => {
    const { toggleTheme, theme } = useContext(DarkModeContext);

    const [openNav, setOpenNav] = useState(false);

    return (
        <S.Nav>
            <Link
                to="hero"
                offset={-250}
                spy={false}
                smooth="easeInOutQuart"
                duration={1000}
                style={{ cursor: "pointer" }}
            >
                {theme.title === "dark" ? <Logo /> : <LogoDark />}
            </Link>

            <S.ImageHamb
                themehamb={`${theme.title === "dark"}`}
                onClick={() => setOpenNav(!openNav)}
                src={hamb}
                alt="icone que representa o menu mobile"
            />

            <S.ContainerList openNav={openNav}>
                <S.ContentList themeMenu={theme.title === "dark"}>
                    <S.ListItems>
                        <Link
                            to="about"
                            spy={false}
                            smooth="easeInOutQuart"
                            duration={1000}
                        >
                            Sobre
                        </Link>
                    </S.ListItems>
                    <S.ListItems>
                        <Link
                            to="skills"
                            spy={false}
                            smooth="easeInOutQuart"
                            duration={1000}
                        >
                            Habilidades
                        </Link>
                    </S.ListItems>
                    <S.ListItems>
                        <Link
                            to="projects"
                            spy={false}
                            smooth="easeInOutQuart"
                            duration={1000}
                        >
                            Projetos
                        </Link>
                    </S.ListItems>
                    <S.ListItems>
                        <Link
                            to="contact"
                            spy={false}
                            smooth="easeInOutQuart"
                            duration={1000}
                        >
                            Contatos
                        </Link>
                    </S.ListItems>
                    <S.DarkMode>
                        <S.StyleImage
                            onClick={() => {
                                toggleTheme();
                            }}
                            src={theme.title === "dark" ? sun : moon}
                            alt="Icone de modo noturno"
                        />
                    </S.DarkMode>
                </S.ContentList>
            </S.ContainerList>
        </S.Nav>
    );
};
