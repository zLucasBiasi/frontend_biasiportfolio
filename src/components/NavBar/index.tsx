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
    const { toggleTheme } = useContext(DarkModeContext);

    const [openNav, setOpenNav] = useState(false);

    const [mode, setMode] = useState(true);

    return (
        <S.Nav>
            {mode ? <Logo /> : <LogoDark />}

            <S.ImageHamb
                onClick={() => setOpenNav(!openNav)}
                src={hamb}
                alt="icone que representa o menu mobile"
            />

            <S.ContainerList openNav={openNav}>
                <S.ContentList>
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
                                setMode((prev) => !prev);
                                toggleTheme();
                            }}
                            src={mode ? sun : moon}
                            alt="Icone de modo noturno"
                        />
                    </S.DarkMode>
                </S.ContentList>
            </S.ContainerList>
        </S.Nav>
    );
};
